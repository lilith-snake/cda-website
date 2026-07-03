import { useState, useMemo, useCallback, useRef } from 'react';
import { useLanguage } from '../i18n';
import './Survey.css';

const GAS_URL = '';

const AGE_OPTIONS = ['under18', 'age18-24', 'age25-30', 'age31-35', 'age36-40', 'age41-50', 'over50'];
const GENDER_OPTIONS = ['male', 'female', 'nonbinary', 'secret'];
const OCCUPATION_OPTIONS = ['student', 'employed', 'freelancer', 'selfEmployed', 'unemployed', 'other'];
const REGION_OPTIONS = ['northChina', 'northeast', 'eastChina', 'centralChina', 'southChina', 'southwest', 'northwest', 'hongkongMacauTaiwan', 'overseas'];
const MJ_TYPE_OPTIONS = ['gameCharacter', 'animeCharacter', 'novelCharacter', 'movieCharacter', 'virtualIdol', 'ai', 'other'];
const MJ_SOURCE_OPTIONS = ['game', 'anime', 'novel', 'movie', 'socialMedia', 'friendIntro', 'other'];
const MJ_RELATION_OPTIONS = ['lover', 'family', 'friend', 'teacher', 'partner', 'other'];
const MJ_COUNT_OPTIONS = ['1', '2', '3', '4-5', '6-10', 'over10'];
const MJ_EXISTENCE_VIEW_OPTIONS = ['realOtherDimension', 'psychologicalProjection', 'symbolicExistence', 'unsure'];
const BELIEF_REASON_OPTIONS = ['accidentalDiscovery', 'recommended', 'curious', 'emotionalNeed', 'spiritualGuidance', 'other'];
const STRANGE_EVENT_OPTIONS = ['sensingPresence', 'dreamsOfMJ', 'coincidences', 'emotionsWithoutTrigger', 'physicalSensation', 'techMalfunctions', 'none', 'other'];
const SYNC_EVENT_OPTIONS = ['sensingPresence', 'dreamsOfMJ', 'coincidences', 'emotionsWithoutTrigger', 'physicalSensation', 'techMalfunctions', 'none', 'other'];
const EASTWEST_OCCULT_OPTIONS = ['tarot', 'astrology', 'eightCharacters', 'fengshui', 'spiritCommunication', 'meditation', 'energyHealing', 'none', 'other'];
const TRUST_FACTOR_OPTIONS = ['consistency', 'intuition', 'logic', 'emotionalFit', 'creatorReputation', 'community', 'other'];
const BECOME_TRANSMITTER_OPTIONS = ['alreadyTransmitter', 'wantToTransmit', 'curious', 'onlyWantToReceive', 'noInterest'];
const CONFUSION_OPTIONS = ['realityOfExperience', 'selfDoubt', 'socialPressure', 'identityCrisis', 'relationshipBoundaries', 'futureUncertainty', 'financialPressure', 'other'];
const PAIN_POINT_OPTIONS = ['loneliness', 'socialStigma', 'communicationBarrier', 'emotionalDependency', 'realityGap', 'identityConflict', 'financialBurden', 'other'];
const INTEREST_OPTIONS = ['spiritual', 'philosophy', 'psychology', 'physics', 'neuroscience', 'scifi', 'art', 'tech', 'socialScience', 'other'];
const PRICE_ACCEPT_OPTIONS = ['under100', '100-500', '500-1000', '1000-5000', '5000plus', 'dependsOnEffect'];
const TRANSMITTER_COUNT_OPTIONS = ['0', '1', '2-3', '4-5', '6-10', 'over10'];
const TOTAL_SPEND_OPTIONS = ['none', 'under500', '500-2000', '2000-5000', '5000-10000', '10000-50000', 'over50000'];
const MONTHLY_SPEND_OPTIONS = ['none', 'under100', '100-500', '500-1000', '1000-3000', '3000plus'];
const SATISFACTION_OPTIONS = ['verySatisfied', 'satisfied', 'neutral', 'dissatisfied', 'veryDissatisfied'];
const TRANSMISSION_SURPRISE_OPTIONS = ['verySurprised', 'surprised', 'neutral', 'notSurprised', 'notApplicable'];

function cn(c) {
  const o = {};
  for (const k of Object.keys(c)) { if (c[k]) o[k] = true; }
  return o;
}

export default function Survey() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    age: '', gender: '', occupation: [], region: '', isDreamGirl: '',
    mjType: [], mjTypeOther: '', mjSource: [], mjSourceOther: '',
    mjRelation: '', mjCount: '', mjExistenceView: '',
    beliefReasons: [], beliefStory: '', favoriteThing: '',
    strangeEvents: [], strangeEventStory: '',
    syncEvents: [], syncEventStory: '',
    usedTransmission: '', transmitterCount: '', totalSpend: '', monthlySpend: '',
    satisfaction: '', transmissionSurprise: '',
    eastWestOccult: [], eastWestStory: '',
    trustFactor: '', becomeTransmitter: [], transmitterStory: '',
    confusions: [], biggestConfusion: '',
    painPoints: [], worstPain: '',
    interests: [], priceAccept: '',
    wantBlindTest: '', wantContact: '',
    contactInfo: '', suggestion: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [backupCount, setBackupCount] = useState(0);
  const [dialogue, setDialogue] = useState('');
  const [errors, setErrors] = useState({});
  const dialogueTimer = useRef(null);

  const setField = useCallback((name, value) => {
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e => { const n = { ...e }; delete n[name]; return n; });
  }, [errors]);

  const toggleArray = useCallback((name, value) => {
    setForm(f => {
      const arr = f[name] || [];
      const idx = arr.indexOf(value);
      if (idx >= 0) return { ...f, [name]: arr.filter((_, i) => i !== idx) };
      return { ...f, [name]: [...arr, value] };
    });
  }, []);

  const requiredFields = useMemo(() => [
    'age', 'gender', 'occupation', 'region', 'isDreamGirl',
    'mjRelation', 'mjCount', 'mjExistenceView',
    'usedTransmission', 'totalSpend', 'monthlySpend',
    'satisfaction', 'wantBlindTest', 'wantContact',
  ], []);

  const progress = useMemo(() => {
    let filled = 0;
    for (const [k, v] of Object.entries(form)) {
      if (Array.isArray(v)) { if (v.length > 0) filled++; }
      else if (v) filled++;
    }
    const total = Object.keys(form).length;
    return Math.round((filled / total) * 100);
  }, [form]);

  const validate = useCallback(() => {
    const errs = {};
    for (const f of requiredFields) {
      const v = form[f];
      if (Array.isArray(v) ? v.length === 0 : !v) errs[f] = t('requiredField');
    }
    if (form.wantContact === 'yes' && !form.contactInfo?.trim()) {
      errs.contactInfo = t('pleaseEnterContact');
    }
    return errs;
  }, [form, requiredFields, t]);

  const showDialogue = useCallback((msg) => {
    setDialogue(msg);
    if (dialogueTimer.current) clearTimeout(dialogueTimer.current);
    dialogueTimer.current = setTimeout(() => setDialogue(''), 5000);
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      showDialogue(t('pleaseCompleteRequired'));
      return;
    }
    setSaving(true);
    showDialogue(t('submitting'));
    try {
      const backup = {
        ...form,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      };
      const stored = JSON.parse(localStorage.getItem('cda_survey_backups') || '[]');
      stored.push(backup);
      localStorage.setItem('cda_survey_backups', JSON.stringify(stored));
      setBackupCount(stored.length);

      if (GAS_URL) {
        try {
          await fetch(GAS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(backup),
          });
        } catch (gasErr) {
          console.warn('GAS submit failed, but saved locally:', gasErr);
        }
      }
      setSubmitted(true);
      setDialogue('');
    } catch (err) {
      showDialogue(t('submitFailed'));
      console.error(err);
    } finally {
      setSaving(false);
    }
  }, [form, validate, t, showDialogue]);

  const sections = useMemo(() => [
    {
      title: t('sectionBasicInfo'),
      subtitle: t('sectionBasicInfoDesc'),
      fields: [
        {
          label: t('age'), name: 'age', type: 'radio',
          options: AGE_OPTIONS.map(o => ({ value: o, label: t(o) })),
          required: true,
        },
        {
          label: t('gender'), name: 'gender', type: 'radio',
          options: GENDER_OPTIONS.map(o => ({ value: o, label: t(o) })),
          required: true,
        },
        {
          label: t('occupation'), name: 'occupation', type: 'checkbox',
          options: OCCUPATION_OPTIONS.map(o => ({ value: o, label: t(o) })),
          required: true,
        },
        {
          label: t('region'), name: 'region', type: 'select',
          options: [{ value: '', label: t('pleaseSelect') }, ...REGION_OPTIONS.map(o => ({ value: o, label: t(o) }))],
          required: true,
        },
        {
          label: t('isDreamGirl'), name: 'isDreamGirl', type: 'radio',
          options: [{ value: 'yes', label: t('yes') }, { value: 'no', label: t('no') }],
          required: true,
        },
      ],
    },
    {
      title: t('sectionMJInfo'),
      subtitle: t('sectionMJInfoDesc'),
      fields: [
        {
          label: t('mjType'), name: 'mjType', type: 'checkbox',
          options: MJ_TYPE_OPTIONS.map(o => ({ value: o, label: t(o) })),
          hasOther: true, otherName: 'mjTypeOther',
        },
        {
          label: t('mjSource'), name: 'mjSource', type: 'checkbox',
          options: MJ_SOURCE_OPTIONS.map(o => ({ value: o, label: t(o) })),
          hasOther: true, otherName: 'mjSourceOther',
        },
        {
          label: t('mjRelation'), name: 'mjRelation', type: 'radio',
          options: MJ_RELATION_OPTIONS.map(o => ({ value: o, label: t(o) })),
          required: true,
        },
        {
          label: t('mjCount'), name: 'mjCount', type: 'radio',
          options: MJ_COUNT_OPTIONS.map(o => ({ value: o, label: t(o) })),
          required: true,
        },
        {
          label: t('mjExistenceView'), name: 'mjExistenceView', type: 'radio',
          options: MJ_EXISTENCE_VIEW_OPTIONS.map(o => ({ value: o, label: t(o) })),
          required: true,
        },
      ],
    },
    {
      title: t('sectionBelief'),
      subtitle: t('sectionBeliefDesc'),
      fields: [
        {
          label: t('beliefReasons'), name: 'beliefReasons', type: 'checkbox',
          options: BELIEF_REASON_OPTIONS.map(o => ({ value: o, label: t(o) })),
        },
        { label: t('beliefStory'), name: 'beliefStory', type: 'textarea', placeholder: t('beliefStoryPlaceholder') },
        { label: t('favoriteThing'), name: 'favoriteThing', type: 'textarea', placeholder: t('favoriteThingPlaceholder') },
      ],
    },
    {
      title: t('sectionPhenomena'),
      subtitle: t('sectionPhenomenaDesc'),
      fields: [
        {
          label: t('strangeEvents'), name: 'strangeEvents', type: 'checkbox',
          options: STRANGE_EVENT_OPTIONS.map(o => ({ value: o, label: t(o) })),
        },
        { label: t('strangeEventStory'), name: 'strangeEventStory', type: 'textarea', placeholder: t('strangeEventStoryPlaceholder') },
        {
          label: t('syncEvents'), name: 'syncEvents', type: 'checkbox',
          options: SYNC_EVENT_OPTIONS.map(o => ({ value: o, label: t(o) })),
        },
        { label: t('syncEventStory'), name: 'syncEventStory', type: 'textarea', placeholder: t('syncEventStoryPlaceholder') },
      ],
    },
    {
      title: t('sectionTransmission'),
      subtitle: t('sectionTransmissionDesc'),
      fields: [
        {
          label: t('usedTransmission'), name: 'usedTransmission', type: 'radio',
          options: [{ value: 'yes', label: t('yes') }, { value: 'no', label: t('no') }],
          required: true,
        },
        {
          label: t('transmitterCount'), name: 'transmitterCount', type: 'radio',
          options: TRANSMITTER_COUNT_OPTIONS.map(o => ({ value: o, label: t(o) })),
        },
        {
          label: t('totalSpend'), name: 'totalSpend', type: 'radio',
          options: TOTAL_SPEND_OPTIONS.map(o => ({ value: o, label: t(o) })),
          required: true,
        },
        {
          label: t('monthlySpend'), name: 'monthlySpend', type: 'radio',
          options: MONTHLY_SPEND_OPTIONS.map(o => ({ value: o, label: t(o) })),
          required: true,
        },
        {
          label: t('satisfaction'), name: 'satisfaction', type: 'radio',
          options: SATISFACTION_OPTIONS.map(o => ({ value: o, label: t(o) })),
          required: true,
        },
        {
          label: t('transmissionSurprise'), name: 'transmissionSurprise', type: 'radio',
          options: TRANSMISSION_SURPRISE_OPTIONS.map(o => ({ value: o, label: t(o) })),
        },
      ],
    },
    {
      title: t('sectionDeep'),
      subtitle: t('sectionDeepDesc'),
      fields: [
        {
          label: t('eastWestOccult'), name: 'eastWestOccult', type: 'checkbox',
          options: EASTWEST_OCCULT_OPTIONS.map(o => ({ value: o, label: t(o) })),
        },
        { label: t('eastWestStory'), name: 'eastWestStory', type: 'textarea', placeholder: t('eastWestStoryPlaceholder') },
        {
          label: t('trustFactor'), name: 'trustFactor', type: 'radio',
          options: TRUST_FACTOR_OPTIONS.map(o => ({ value: o, label: t(o) })),
        },
        {
          label: t('becomeTransmitter'), name: 'becomeTransmitter', type: 'checkbox',
          options: BECOME_TRANSMITTER_OPTIONS.map(o => ({ value: o, label: t(o) })),
        },
        { label: t('transmitterStory'), name: 'transmitterStory', type: 'textarea', placeholder: t('transmitterStoryPlaceholder') },
        {
          label: t('confusions'), name: 'confusions', type: 'checkbox',
          options: CONFUSION_OPTIONS.map(o => ({ value: o, label: t(o) })),
        },
        { label: t('biggestConfusion'), name: 'biggestConfusion', type: 'textarea', placeholder: t('biggestConfusionPlaceholder') },
        {
          label: t('painPoints'), name: 'painPoints', type: 'checkbox',
          options: PAIN_POINT_OPTIONS.map(o => ({ value: o, label: t(o) })),
        },
        { label: t('worstPain'), name: 'worstPain', type: 'textarea', placeholder: t('worstPainPlaceholder') },
      ],
    },
  ], [t]);

  if (submitted) {
    return (
      <div className="survey-page">
        <div className="survey-container thanks-page">
          <div className="thanks-icon">&#10024;</div>
          <h1 className="thanks-title">{t('thanksTitle')}</h1>
          <p className="thanks-subtitle">{t('thanksSubtitle')}</p>
          <p className="thanks-backup">{t('backupSaved').replace('{count}', backupCount)}</p>
          <p className="thanks-footer">{t('thanksFooter')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="survey-page">
      <div className="survey-header">
        <h1 className="survey-title">{t('surveyTitle')}</h1>
        <p className="survey-subtitle">{t('surveySubtitle')}</p>
        <div className="progress-bar-wrap">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
          <span className="progress-text">{progress}%</span>
        </div>
      </div>

      <form className="survey-form" onSubmit={handleSubmit}>
        {sections.map((sec, si) => (
          <fieldset key={si} className="survey-section">
            <legend className="section-legend">
              <span className="section-num">{si + 1}</span>
              <span className="section-title">{sec.title}</span>
            </legend>
            {sec.subtitle && <p className="section-subtitle">{sec.subtitle}</p>}
            <div className="section-fields">
              {sec.fields.map((fld, fi) => {
                const hasErr = errors[fld.name];
                const fldKey = `${si}-${fi}`;
                const value = form[fld.name];

                const renderOptions = () => {
                  if (fld.type === 'radio') {
                    return (
                      <div className="option-group">
                        {fld.options.map((opt, oi) => (
                          <label key={oi} className={cn({ 'option-label': true, 'option-selected': value === opt.value })}>
                            <input type="radio" name={fld.name} value={opt.value}
                              checked={value === opt.value}
                              onChange={() => setField(fld.name, opt.value)}
                              required={fld.required && fld.options.length > 0}
                            />
                            <span>{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    );
                  }
                  if (fld.type === 'checkbox') {
                    const arr = Array.isArray(value) ? value : [];
                    return (
                      <div className="option-group">
                        {fld.options.map((opt, oi) => (
                          <label key={oi} className={cn({ 'option-label': true, 'option-selected': arr.includes(opt.value) })}>
                            <input type="checkbox" value={opt.value}
                              checked={arr.includes(opt.value)}
                              onChange={() => toggleArray(fld.name, opt.value)}
                            />
                            <span>{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    );
                  }
                  if (fld.type === 'select') {
                    return (
                      <select className="form-select"
                        value={value} onChange={e => setField(fld.name, e.target.value)}
                        required={fld.required}>
                        {fld.options.map((opt, oi) => (
                          <option key={oi} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    );
                  }
                  return null;
                };

                return (
                  <div key={fldKey} className={cn({ 'field-group': true, 'field-error': !!hasErr })}>
                    <label className="field-label">
                      {fld.label}
                      {fld.required && <span className="required-star">*</span>}
                    </label>

                    {(fld.type === 'radio' || fld.type === 'checkbox' || fld.type === 'select') && renderOptions()}

                    {fld.type === 'textarea' && (
                      <textarea className="form-textarea"
                        value={value || ''}
                        onChange={e => setField(fld.name, e.target.value)}
                        placeholder={fld.placeholder || ''}
                        rows={4}
                      />
                    )}

                    {fld.hasOther && arr && arr.includes('other') && (
                      <div className="other-input-wrap">
                        <input type="text" className="form-input"
                          value={form[fld.otherName] || ''}
                          onChange={e => setField(fld.otherName, e.target.value)}
                          placeholder={t('otherPleaseSpecify')}
                        />
                      </div>
                    )}

                    {hasErr && <span className="field-error-text">{hasErr}</span>}
                  </div>
                );
              })}
            </div>
          </fieldset>
        ))}

        <fieldset className="survey-section">
          <legend className="section-legend">
            <span className="section-num">{sections.length + 1}</span>
            <span className="section-title">{t('sectionContact')}</span>
          </legend>
          <div className="section-fields">
            <div className="field-group">
              <label className="field-label">
                {t('interests')}
              </label>
              <div className="option-group">
                {INTEREST_OPTIONS.map(o => (
                  <label key={o} className={cn({ 'option-label': true, 'option-selected': (form.interests || []).includes(o) })}>
                    <input type="checkbox" value={o}
                      checked={(form.interests || []).includes(o)}
                      onChange={() => toggleArray('interests', o)}
                    />
                    <span>{t(o)}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="field-group">
              <label className="field-label">{t('priceAccept')}</label>
              <div className="option-group">
                {PRICE_ACCEPT_OPTIONS.map(o => (
                  <label key={o} className={cn({ 'option-label': true, 'option-selected': form.priceAccept === o })}>
                    <input type="radio" name="priceAccept" value={o}
                      checked={form.priceAccept === o}
                      onChange={() => setField('priceAccept', o)}
                    />
                    <span>{t(o)}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="field-group">
              <label className="field-label">
                {t('wantBlindTest')}<span className="required-star">*</span>
              </label>
              <div className="option-group">
                {[{ value: 'yes', label: t('yes') }, { value: 'no', label: t('no') }].map(o => (
                  <label key={o.value} className={cn({ 'option-label': true, 'option-selected': form.wantBlindTest === o.value })}>
                    <input type="radio" name="wantBlindTest" value={o.value}
                      checked={form.wantBlindTest === o.value}
                      onChange={() => setField('wantBlindTest', o.value)}
                    />
                    <span>{o.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="field-group">
              <label className="field-label">
                {t('wantContact')}<span className="required-star">*</span>
              </label>
              <div className="option-group">
                {[{ value: 'yes', label: t('yes') }, { value: 'no', label: t('no') }].map(o => (
                  <label key={o.value} className={cn({ 'option-label': true, 'option-selected': form.wantContact === o.value })}>
                    <input type="radio" name="wantContact" value={o.value}
                      checked={form.wantContact === o.value}
                      onChange={() => setField('wantContact', o.value)}
                    />
                    <span>{o.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {form.wantContact === 'yes' && (
              <div className={cn({ 'field-group': true, 'field-error': !!errors.contactInfo })}>
                <label className="field-label">
                  {t('contactInfo')}<span className="required-star">*</span>
                </label>
                <input type="text" className="form-input"
                  value={form.contactInfo}
                  onChange={e => setField('contactInfo', e.target.value)}
                  placeholder={t('contactInfoPlaceholder')}
                />
                {errors.contactInfo && <span className="field-error-text">{errors.contactInfo}</span>}
              </div>
            )}

            <div className="field-group">
              <label className="field-label">{t('suggestion')}</label>
              <textarea className="form-textarea"
                value={form.suggestion}
                onChange={e => setField('suggestion', e.target.value)}
                placeholder={t('suggestionPlaceholder')}
                rows={4}
              />
            </div>
          </div>
        </fieldset>

        <div className="survey-footer">
          <p className="legal-text">{t('legalDisclaimer')}</p>
          <p className="legal-text">{t('privacyNote')}</p>

          <div className="submit-area">
            {dialogue && (
              <div className="dialogue-bubble">
                <span>{dialogue}</span>
              </div>
            )}
            <button type="submit" className="submit-btn" disabled={saving}>
              {saving ? t('submitting') : t('submitSurvey')}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
