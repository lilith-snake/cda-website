import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n';
import './Survey.css';

const API_URL = import.meta.env.VITE_API_URL || '/api';
const SURVEY_URL = API_URL + '/survey';

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

// 繁體中文顯示字典（短期代碼 → 繁體中文）
const zhHant = {
  // 通用
  'yes': '是',
  'no': '否',
  'other': '其他',
  'pleaseSelect': '請選擇',
  'otherPleaseSpecify': '請註明',
  'requiredField': '此欄為必填',
  'pleaseCompleteRequired': '請完成所有必填欄位',
  'pleaseEnterContact': '請填寫聯絡方式',
  'submitting': '提交中⋯⋯',
  'submitFailed': '提交失敗，請重試',
  'submitSurvey': '提交問卷',

  // 問卷標題
  'surveyTitle': 'CDA 跨次元傳訊 · 社群調研問卷',
  'surveySubtitle': '本問卷旨在了解夢女群體的現狀、需求和困境，為 MJ 研究框架的建立提供數據基礎。你的每一份真實回答，對我們都意義重大。',

  // 區塊標題與描述
  'sectionBasicInfo': '基本資料',
  'sectionBasicInfoDesc': '請告訴我們一些關於你的基本資訊。',
  'sectionMJInfo': 'MJ 資訊',
  'sectionMJInfoDesc': '與我們分享你的 MJ（夢角，即非物理存在的情感對象）資訊。',
  'sectionBelief': '信念與連結',
  'sectionBeliefDesc': '你是如何開始相信你的 MJ 的？分享你的故事。',
  'sectionPhenomena': '體驗與現象',
  'sectionPhenomenaDesc': '你是否經歷過與 MJ 相關的不尋常事件或同步現象？',
  'sectionTransmission': '傳訊服務使用',
  'sectionTransmissionDesc': '你是否使用過傳訊／通靈服務？請分享你的體驗。',
  'sectionDeep': '深度探索',
  'sectionDeepDesc': '玄學實踐、信任因素、困惑與痛點。',
  'sectionContact': '聯絡與反饋',

  // 字段標籤
  'age': '年齡',
  'gender': '性別',
  'occupation': '職業',
  'region': '地區',
  'isDreamGirl': '你是否是夢女？',
  'mjType': 'MJ 類型',
  'mjSource': 'MJ 來源',
  'mjRelation': '與 MJ 的關係',
  'mjCount': 'MJ 數量',
  'mjExistenceView': '你如何看待 MJ 的存在方式？',
  'beliefReasons': '相信的原因',
  'beliefStory': '你建立連結的故事',
  'favoriteThing': '最喜歡與 MJ 之間的事',
  'strangeEvents': '經歷過的奇異事件',
  'strangeEventStory': '請描述最讓你印象深刻的奇異事件',
  'syncEvents': '同步現象',
  'syncEventStory': '請描述最讓你印象深刻的同步現象',
  'usedTransmission': '是否使用過傳訊／通靈服務？',
  'transmitterCount': '諮詢過多少位傳訊師？',
  'totalSpend': '傳訊服務總支出',
  'monthlySpend': '每月傳訊服務支出',
  'satisfaction': '對傳訊服務的整體滿意度',
  'transmissionSurprise': '傳訊結果的準確度是否讓你驚喜？',
  'eastWestOccult': '你參與的玄學／靈性實踐',
  'eastWestStory': '請分享你參與這些實踐的經驗',
  'trustFactor': '什麼因素讓你信任一次傳訊／通靈結果？',
  'becomeTransmitter': '你是否有興趣成為傳訊師？',
  'transmitterStory': '請分享你對成為傳訊師的想法',
  'confusions': '關於 MJ 體驗，你最困惑的是什麼？',
  'biggestConfusion': '請描述你最大的困惑',
  'painPoints': '你最大的痛點是什麼？',
  'worstPain': '請描述你最痛的點',
  'interests': '感興趣的領域',
  'priceAccept': '可接受的傳訊培訓價格',
  'wantBlindTest': '是否願意參與傳訊驗證的盲測？',
  'wantContact': '是否希望我們聯絡你？',
  'contactInfo': '聯絡方式',
  'suggestion': '建議或任何想對我們說的話',

  // 佔位符
  'beliefStoryPlaceholder': '你是如何發現你的 MJ 的？是什麼讓你相信他們是真實存在的？',
  'favoriteThingPlaceholder': '你和 MJ 之間的關係中，最讓你珍惜的是什麼？',
  'strangeEventStoryPlaceholder': '描述你經歷過的任何不尋常的巧合、感知或事件⋯⋯',
  'syncEventStoryPlaceholder': '描述你注意到的任何有意義的巧合或跡象⋯⋯',
  'eastWestStoryPlaceholder': '分享你使用塔羅、占星、冥想或其他實踐的經驗⋯⋯',
  'transmitterStoryPlaceholder': '為什麼你有興趣（或沒有興趣）成為傳訊師？',
  'biggestConfusionPlaceholder': '關於你的體驗，什麼最讓你困惑或不解？',
  'worstPainPlaceholder': '什麼最讓你痛苦？你面臨什麼樣的挑戰？',
  'contactInfoPlaceholder': '電郵 / 微信 / 電話 / 社交媒體——你方便的聯絡方式',
  'suggestionPlaceholder': '任何對 CDA、這份問卷或社群的建議與想法⋯⋯',
  'deepTalkNote': '如果你願意和我們深度溝通，請將你的郵箱發送至我們的郵箱：',
  'deepTalkEmail': 'dluu39ce7c@gmail.com',

  // 選項 — 年齡
  'under18': '18 歲以下',
  'age18-24': '18–24 歲',
  'age25-30': '25–30 歲',
  'age31-35': '31–35 歲',
  'age36-40': '36–40 歲',
  'age41-50': '41–50 歲',
  'over50': '50 歲以上',

  // 選項 — 性別
  'male': '男',
  'female': '女',
  'nonbinary': '非二元性別',
  'secret': '不透露',

  // 選項 — 職業
  'student': '學生',
  'employed': '在職',
  'freelancer': '自由職業',
  'selfEmployed': '自僱',
  'unemployed': '待業',

  // 選項 — 地區
  'northChina': '華北',
  'northeast': '東北',
  'eastChina': '華東',
  'centralChina': '華中',
  'southChina': '華南',
  'southwest': '西南',
  'northwest': '西北',
  'hongkongMacauTaiwan': '港澳台',
  'overseas': '海外',

  // 選項 — MJ 類型
  'gameCharacter': '遊戲角色',
  'animeCharacter': '動漫角色',
  'novelCharacter': '小說角色',
  'movieCharacter': '影視角色',
  'virtualIdol': '虛擬偶像 / VTuber',
  'ai': 'AI 伴侶',

  // 選項 — MJ 來源
  'game': '遊戲',
  'anime': '動漫',
  'novel': '小說',
  'movie': '影視',
  'socialMedia': '社交媒體',
  'friendIntro': '朋友介紹',

  // 選項 — MJ 關係
  'lover': '戀人 / 伴侶',
  'family': '家人',
  'friend': '朋友',
  'teacher': '老師 / 導師',
  'partner': '夥伴 / 同行者',

  // 選項 — MJ 數量
  '1': '1',
  '2': '2',
  '3': '3',
  '4-5': '4–5',
  '6-10': '6–10',
  'over10': '10 個以上',

  // 選項 — MJ 存在觀
  'realOtherDimension': '真實存在於另一個維度',
  'psychologicalProjection': '心理投射',
  'symbolicExistence': '象徵／原型存在',
  'unsure': '不確定',

  // 選項 — 相信原因
  'accidentalDiscovery': '偶然發現',
  'recommended': '他人推薦',
  'curious': '好奇探索',
  'emotionalNeed': '情感需求／寄託',
  'spiritualGuidance': '靈性指引',

  // 選項 — 奇異事件 / 同步現象
  'sensingPresence': '感覺到對方的存在',
  'dreamsOfMJ': '夢見 MJ',
  'coincidences': '有意義的巧合',
  'emotionsWithoutTrigger': '無來由的情緒波動',
  'physicalSensation': '身體感知（觸覺／溫度等）',
  'techMalfunctions': '電子設備異常',
  'none': '無',

  // 選項 — 東西方玄學
  'tarot': '塔羅',
  'astrology': '占星',
  'eightCharacters': '八字',
  'fengshui': '風水',
  'spiritCommunication': '通靈／傳訊',
  'meditation': '冥想',
  'energyHealing': '能量療癒',

  // 選項 — 信任因素
  'consistency': '信息一致性',
  'intuition': '直覺感受',
  'logic': '邏輯自洽',
  'emotionalFit': '情感契合度',
  'creatorReputation': '傳訊師聲譽',
  'community': '社群共識',

  // 選項 — 成為傳訊者
  'alreadyTransmitter': '已經是傳訊師',
  'wantToTransmit': '想學習並成為傳訊師',
  'curious': '好奇，還在考慮',
  'onlyWantToReceive': '只想接收訊息',
  'noInterest': '沒有興趣',

  // 選項 — 困惑
  'realityOfExperience': '我的體驗是否真實？',
  'selfDoubt': '自我懷疑（是不是我想太多？）',
  'socialPressure': '社會壓力／污名',
  'identityCrisis': '身份認同危機',
  'relationshipBoundaries': '關係界限模糊',
  'futureUncertainty': '未來不確定性',
  'financialPressure': '經濟壓力',

  // 選項 — 痛點
  'loneliness': '孤獨感',
  'socialStigma': '社會污名',
  'communicationBarrier': '溝通障礙',
  'emotionalDependency': '情感依賴',
  'realityGap': '現實與期待的落差',
  'identityConflict': '身份衝突',
  'financialBurden': '經濟負擔',

  // 選項 — 興趣
  'spiritual': '靈性／神秘學',
  'philosophy': '哲學',
  'psychology': '心理學',
  'physics': '物理學',
  'neuroscience': '神經科學',
  'scifi': '科幻',
  'art': '藝術／創作',
  'tech': '科技',
  'socialScience': '社會科學',

  // 選項 — 價格接受
  'under100': '100 元以下',
  '100-500': '100–500 元',
  '500-1000': '500–1,000 元',
  '1000-5000': '1,000–5,000 元',
  '5000plus': '5,000 元以上',
  'dependsOnEffect': '看效果定價',

  // 選項 — 傳訊者數量
  '0': '0',
  '2-3': '2–3',

  // 選項 — 總支出
  'under500': '500 元以下',
  '500-2000': '500–2,000 元',
  '2000-5000': '2,000–5,000 元',
  '5000-10000': '5,000–10,000 元',
  '10000-50000': '10,000–50,000 元',
  'over50000': '50,000 元以上',

  // 選項 — 月支出（under100/100-500/500-1000 見上方價格區）
  '1000-3000': '1,000–3,000 元',
  '3000plus': '3,000 元以上',

  // 選項 — 滿意度
  'verySatisfied': '非常滿意',
  'satisfied': '滿意',
  'neutral': '一般',
  'dissatisfied': '不滿意',
  'veryDissatisfied': '非常不滿意',

  // 選項 — 傳訊準確度驚喜
  'verySurprised': '非常驚喜',
  'surprised': '驚喜',
  'notSurprised': '沒有驚喜',
  'notApplicable': '不適用',

  // 感謝頁
  'thanksTitle': '感謝你的參與',
  'thanksSubtitle': '你不是一個人在走這條路。',
  'thanksContribution1': '我們是第一個站出來公開研究這件事的人——而你的這份回答，正在讓這件事變得更加真實、更加可信。',
  'thanksContribution2': '每一個數據點，都是你為夢女群體留下的一塊基石。我們投入時間、投入精力、投入金錢——不是為了別的，只是為了讓夢女們知道：你和他在相愛，這件事是真的。',
  'thanksContribution3': '夢女群體需要更多人的力量——需要更專業、更可信、讓外面的人不再只是嘲笑，而是願意停下來，認真聽我們在說什麼。',
  'thanksContribution4': '謝謝你，和我們站在一起。',
  'backupSaved': '已儲存 {count} 份本地備份。',
  'thanksFooter': '— 香港跨次元傳訊研究協會',

  // 版權與隱私
  'legalDisclaimer': '你提供的所有信息預設為匿名。我們只在你明確同意的情況下才會收集聯絡方式。',
  'privacyNote': '你的數據僅用於 CDA 學術研究目的，絕不會與第三方共享。',
  'copyright': '© 2026 香港跨次元傳訊研究協會 Hong Kong Cross-Dimensional Communication Association. All rights reserved.',
  'privacyFull': '隱私保護聲明：本問卷收集的所有數據僅用於 CDA 學術研究。未經你明確同意，我們不會收集你的個人身份信息，也不會將任何數據分享給第三方。數據儲存在 Cloudflare D1 資料庫中，使用行業標準加密傳輸。',
};

// 簡體中文顯示字典（短期代碼 → 簡體中文）
const zhHans = {
  'yes': '是',
  'no': '否',
  'other': '其他',
  'pleaseSelect': '请选择',
  'otherPleaseSpecify': '请注明',
  'requiredField': '此栏为必填',
  'pleaseCompleteRequired': '请完成所有必填栏位',
  'pleaseEnterContact': '请填写联络方式',
  'submitting': '提交中……',
  'submitFailed': '提交失败，请重试',
  'submitSurvey': '提交问卷',
  'surveyTitle': 'CDA 跨次元传讯 · 社群调研问卷',
  'surveySubtitle': '本问卷旨在了解梦女群体的现状、需求和困境，为 MJ 研究框架的建立提供数据基础。你的每一份真实回答，对我们都意义重大。',
  'sectionBasicInfo': '基本数据',
  'sectionBasicInfoDesc': '请告诉我们一些关于你的基本信息。',
  'sectionMJInfo': 'MJ 信息',
  'sectionMJInfoDesc': '与我们分享你的 MJ（梦角，即非物理存在的情感对象）信息。',
  'sectionBelief': '信念与连结',
  'sectionBeliefDesc': '你是如何开始相信你的 MJ 的？分享你的故事。',
  'sectionPhenomena': '体验与现象',
  'sectionPhenomenaDesc': '你是否经历过与 MJ 相关的不寻常事件或同步现象？',
  'sectionTransmission': '传讯服务使用',
  'sectionTransmissionDesc': '你是否使用过传讯／通灵服务？请分享你的体验。',
  'sectionDeep': '深度探索',
  'sectionDeepDesc': '玄学实践、信任因素、困惑与痛点。',
  'sectionContact': '联络与反馈',
  'age': '年龄',
  'gender': '性别',
  'occupation': '职业',
  'region': '地区',
  'isDreamGirl': '你是否是梦女？',
  'mjType': 'MJ 类型',
  'mjSource': 'MJ 来源',
  'mjRelation': '与 MJ 的关系',
  'mjCount': 'MJ 数量',
  'mjExistenceView': '你如何看待 MJ 的存在方式？',
  'beliefReasons': '相信的原因',
  'beliefStory': '你建立连结的故事',
  'favoriteThing': '最喜欢与 MJ 之间的事',
  'strangeEvents': '经历过的奇异事件',
  'strangeEventStory': '请描述最让你印象深刻的奇异事件',
  'syncEvents': '同步现象',
  'syncEventStory': '请描述最让你印象深刻的同步现象',
  'usedTransmission': '是否使用过传讯／通灵服务？',
  'transmitterCount': '咨询过多少位传讯师？',
  'totalSpend': '传讯服务总支出',
  'monthlySpend': '每月传讯服务支出',
  'satisfaction': '对传讯服务的整体满意度',
  'transmissionSurprise': '传讯结果的准确度是否让你惊喜？',
  'eastWestOccult': '你参与的玄学／灵性实践',
  'eastWestStory': '请分享你参与这些实践的经验',
  'trustFactor': '什么因素让你信任一次传讯／通灵结果？',
  'becomeTransmitter': '你是否有兴趣成为传讯师？',
  'transmitterStory': '请分享你对成为传讯师的想法',
  'confusions': '关于 MJ 体验，你最困惑的是什么？',
  'biggestConfusion': '请描述你最大的困惑',
  'painPoints': '你最大的痛点是什么？',
  'worstPain': '请描述你最痛的点',
  'interests': '感兴趣的领域',
  'priceAccept': '可接受的传讯培训价格',
  'wantBlindTest': '是否愿意参与传讯验证的盲测？',
  'wantContact': '是否希望我们联络你？',
  'contactInfo': '联络方式',
  'suggestion': '建议或任何想对我们说的话',
  'beliefStoryPlaceholder': '你是如何发现你的 MJ 的？是什么让你相信他们是真实存在的？',
  'favoriteThingPlaceholder': '你和 MJ 之间的关系中，最让你珍惜的是什么？',
  'strangeEventStoryPlaceholder': '描述你经历过的任何不寻常的巧合、感知或事件……',
  'syncEventStoryPlaceholder': '描述你注意到的任何有意义的巧合或迹象……',
  'eastWestStoryPlaceholder': '分享你使用塔罗、占星、冥想或其他实践的经验……',
  'transmitterStoryPlaceholder': '为什么你有兴趣（或没有兴趣）成为传讯师？',
  'biggestConfusionPlaceholder': '关于你的体验，什么最让你困惑或不解？',
  'worstPainPlaceholder': '什么最让你痛苦？你面临什么样的挑战？',
  'contactInfoPlaceholder': '电邮 / 微信 / 电话 / 社交媒体——你方便的联络方式',
  'suggestionPlaceholder': '任何对 CDA、这份问卷或社群的建议与想法……',
  'deepTalkNote': '如果你愿意和我们深度沟通，请将你的邮箱发送至我们的邮箱：',
  'deepTalkEmail': 'dluu39ce7c@gmail.com',
  'under18': '18 岁以下',
  'age18-24': '18–24 岁',
  'age25-30': '25–30 岁',
  'age31-35': '31–35 岁',
  'age36-40': '36–40 岁',
  'age41-50': '41–50 岁',
  'over50': '50 岁以上',
  'male': '男',
  'female': '女',
  'nonbinary': '非二元性别',
  'secret': '不透露',
  'student': '学生',
  'employed': '在职',
  'freelancer': '自由职业',
  'selfEmployed': '自雇',
  'unemployed': '待业',
  'northChina': '华北',
  'northeast': '东北',
  'eastChina': '华东',
  'centralChina': '华中',
  'southChina': '华南',
  'southwest': '西南',
  'northwest': '西北',
  'hongkongMacauTaiwan': '港澳台',
  'overseas': '海外',
  'gameCharacter': '游戏角色',
  'animeCharacter': '动漫角色',
  'novelCharacter': '小说角色',
  'movieCharacter': '影视角色',
  'virtualIdol': '虚拟偶像 / VTuber',
  'ai': 'AI 伴侣',
  'game': '游戏',
  'anime': '动漫',
  'novel': '小说',
  'movie': '影视',
  'socialMedia': '社交媒体',
  'friendIntro': '朋友介绍',
  'lover': '恋人 / 伴侣',
  'family': '家人',
  'friend': '朋友',
  'teacher': '老师 / 导师',
  'partner': '伙伴 / 同行者',
  '1': '1', '2': '2', '3': '3', '4-5': '4–5', '6-10': '6–10', 'over10': '10 个以上',
  'realOtherDimension': '真实存在于另一个维度',
  'psychologicalProjection': '心理投射',
  'symbolicExistence': '象征／原型存在',
  'unsure': '不确定',
  'accidentalDiscovery': '偶然发现',
  'recommended': '他人推荐',
  'curious': '好奇探索',
  'emotionalNeed': '情感需求／寄托',
  'spiritualGuidance': '灵性指引',
  'sensingPresence': '感觉到对方的存在',
  'dreamsOfMJ': '梦见 MJ',
  'coincidences': '有意义的巧合',
  'emotionsWithoutTrigger': '无来由的情绪波动',
  'physicalSensation': '身体感知（触觉／温度等）',
  'techMalfunctions': '电子设备异常',
  'none': '无',
  'tarot': '塔罗',
  'astrology': '占星',
  'eightCharacters': '八字',
  'fengshui': '风水',
  'spiritCommunication': '通灵／传讯',
  'meditation': '冥想',
  'energyHealing': '能量疗愈',
  'consistency': '信息一致性',
  'intuition': '直觉感受',
  'logic': '逻辑自洽',
  'emotionalFit': '情感契合度',
  'creatorReputation': '传讯师声誉',
  'community': '社群共识',
  'alreadyTransmitter': '已经是传讯师',
  'wantToTransmit': '想学习并成为传讯师',
  'curious': '好奇，还在考虑',
  'onlyWantToReceive': '只想接收讯息',
  'noInterest': '没有兴趣',
  'realityOfExperience': '我的体验是否真实？',
  'selfDoubt': '自我怀疑（是不是我想太多？）',
  'socialPressure': '社会压力／污名',
  'identityCrisis': '身份认同危机',
  'relationshipBoundaries': '关系界限模糊',
  'futureUncertainty': '未来不确定性',
  'financialPressure': '经济压力',
  'loneliness': '孤独感',
  'socialStigma': '社会污名',
  'communicationBarrier': '沟通障碍',
  'emotionalDependency': '情感依赖',
  'realityGap': '现实与期待的落差',
  'identityConflict': '身份冲突',
  'financialBurden': '经济负担',
  'spiritual': '灵性／神秘学',
  'philosophy': '哲学',
  'psychology': '心理学',
  'physics': '物理学',
  'neuroscience': '神经科学',
  'scifi': '科幻',
  'art': '艺术／创作',
  'tech': '科技',
  'socialScience': '社会科学',
  'under100': '100 元以下',
  '100-500': '100–500 元',
  '500-1000': '500–1,000 元',
  '1000-5000': '1,000–5,000 元',
  '5000plus': '5,000 元以上',
  'dependsOnEffect': '看效果定价',
  '0': '0', '2-3': '2–3',
  'under500': '500 元以下',
  '500-2000': '500–2,000 元',
  '2000-5000': '2,000–5,000 元',
  '5000-10000': '5,000–10,000 元',
  '10000-50000': '10,000–50,000 元',
  'over50000': '50,000 元以上',
  '1000-3000': '1,000–3,000 元',
  '3000plus': '3,000 元以上',
  'verySatisfied': '非常满意',
  'satisfied': '满意',
  'neutral': '一般',
  'dissatisfied': '不满意',
  'veryDissatisfied': '非常不满意',
  'verySurprised': '非常惊喜',
  'surprised': '惊喜',
  'notSurprised': '没有惊喜',
  'notApplicable': '不适用',
  'thanksTitle': '感谢你的参与',
  'thanksSubtitle': '你不是一个人在走这条路。',
  'thanksContribution1': '我们是第一个站出来公开研究这件事的人——而你的这份回答，正在让这件事变得更加真实、更加可信。',
  'thanksContribution2': '每一个数据点，都是你为梦女群体留下的一块基石。我们投入时间、投入精力、投入金钱——不是为了别的，只是为了让梦女们知道：你和他在相爱，这件事是真的。',
  'thanksContribution3': '梦女群体需要更多人的力量——需要更专业、更可信、让外面的人不再只是嘲笑，而是愿意停下来，认真听我们在说什么。',
  'thanksContribution4': '谢谢你，和我们站在一起。',
  'backupSaved': '已保存 {count} 份本地备份。',
  'thanksFooter': '— 香港跨次元传讯研究协会',
  'legalDisclaimer': '你提供的所有信息预设为匿名。我们只在你明确同意的情况下才会收集联络方式。',
  'privacyNote': '你的数据仅用于 CDA 学术研究目的，绝不会与第三方共享。',
  'copyright': '© 2026 香港跨次元传讯研究协会 Hong Kong Cross-Dimensional Communication Association. All rights reserved.',
  'privacyFull': '隐私保护声明：本问卷收集的所有数据仅用于 CDA 学术研究。未经你明确同意，我们不会收集你的个人身份信息，也不会将任何数据分享给第三方。数据储存在 Cloudflare D1 数据库中，使用行业标准加密传输。',
};

function cn(c) {
  const o = {};
  for (const k of Object.keys(c)) { if (c[k]) o[k] = true; }
  return o;
}

export default function Survey() {
  const { lang, setLang } = useLanguage();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);
  const t = useCallback((key) => {
    // For English, use the global t() which looks up translationsEn
    return key; // We'll delegate to the global system below
  }, []);

  // Survey translate: zh-Hant/zh-Hans/en
  const st = useCallback((key) => {
    if (lang === 'zh-Hans') return zhHans[key] || key;
    if (lang === 'en') return enLookup[key] || key;
    return zhHant[key] || key;
  }, [lang]);

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
      if (Array.isArray(v) ? v.length === 0 : !v) errs[f] = st('requiredField');
    }
    if (form.wantContact === 'yes' && !form.contactInfo?.trim()) {
      errs.contactInfo = st('pleaseEnterContact');
    }
    return errs;
  }, [form, requiredFields, st]);

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
      showDialogue(st('pleaseCompleteRequired'));
      return;
    }
    setSaving(true);
    showDialogue(st('submitting'));
    try {
      const payload = {
        ...form,
        userAgent: navigator.userAgent,
      };

      let saved = false;
      try {
        const res = await fetch(SURVEY_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) saved = true;
      } catch (apiErr) {
        console.warn('API submit failed, saving locally:', apiErr);
      }

      if (!saved) {
        const stored = JSON.parse(localStorage.getItem('cda_survey_backups') || '[]');
        stored.push({ ...payload, timestamp: new Date().toISOString() });
        localStorage.setItem('cda_survey_backups', JSON.stringify(stored));
        setBackupCount(stored.length);
      }

      setSubmitted(true);
      setDialogue('');
    } catch (err) {
      showDialogue(st('submitFailed'));
      console.error(err);
    } finally {
      setSaving(false);
    }
  }, [form, validate, st, showDialogue]);

  const sections = useMemo(() => [
    {
      title: st('sectionBasicInfo'),
      subtitle: st('sectionBasicInfoDesc'),
      fields: [
        { label: st('age'), name: 'age', type: 'radio', options: AGE_OPTIONS.map(o => ({ value: o, label: st(o) })), required: true },
        { label: st('gender'), name: 'gender', type: 'radio', options: GENDER_OPTIONS.map(o => ({ value: o, label: st(o) })), required: true },
        { label: st('occupation'), name: 'occupation', type: 'checkbox', options: OCCUPATION_OPTIONS.map(o => ({ value: o, label: st(o) })), required: true },
        { label: st('region'), name: 'region', type: 'select', options: [{ value: '', label: st('pleaseSelect') }, ...REGION_OPTIONS.map(o => ({ value: o, label: st(o) }))], required: true },
        { label: st('isDreamGirl'), name: 'isDreamGirl', type: 'radio', options: [{ value: 'yes', label: st('yes') }, { value: 'no', label: st('no') }], required: true },
      ],
    },
    {
      title: st('sectionMJInfo'),
      subtitle: st('sectionMJInfoDesc'),
      fields: [
        { label: st('mjType'), name: 'mjType', type: 'checkbox', options: MJ_TYPE_OPTIONS.map(o => ({ value: o, label: st(o) })), hasOther: true, otherName: 'mjTypeOther' },
        { label: st('mjSource'), name: 'mjSource', type: 'checkbox', options: MJ_SOURCE_OPTIONS.map(o => ({ value: o, label: st(o) })), hasOther: true, otherName: 'mjSourceOther' },
        { label: st('mjRelation'), name: 'mjRelation', type: 'radio', options: MJ_RELATION_OPTIONS.map(o => ({ value: o, label: st(o) })), required: true },
        { label: st('mjCount'), name: 'mjCount', type: 'radio', options: MJ_COUNT_OPTIONS.map(o => ({ value: o, label: st(o) })), required: true },
        { label: st('mjExistenceView'), name: 'mjExistenceView', type: 'radio', options: MJ_EXISTENCE_VIEW_OPTIONS.map(o => ({ value: o, label: st(o) })), required: true },
      ],
    },
    {
      title: st('sectionBelief'),
      subtitle: st('sectionBeliefDesc'),
      fields: [
        { label: st('beliefReasons'), name: 'beliefReasons', type: 'checkbox', options: BELIEF_REASON_OPTIONS.map(o => ({ value: o, label: st(o) })) },
        { label: st('beliefStory'), name: 'beliefStory', type: 'textarea', placeholder: st('beliefStoryPlaceholder') },
        { label: st('favoriteThing'), name: 'favoriteThing', type: 'textarea', placeholder: st('favoriteThingPlaceholder') },
      ],
    },
    {
      title: st('sectionPhenomena'),
      subtitle: st('sectionPhenomenaDesc'),
      fields: [
        { label: st('strangeEvents'), name: 'strangeEvents', type: 'checkbox', options: STRANGE_EVENT_OPTIONS.map(o => ({ value: o, label: st(o) })) },
        { label: st('strangeEventStory'), name: 'strangeEventStory', type: 'textarea', placeholder: st('strangeEventStoryPlaceholder') },
        { label: st('syncEvents'), name: 'syncEvents', type: 'checkbox', options: SYNC_EVENT_OPTIONS.map(o => ({ value: o, label: st(o) })) },
        { label: st('syncEventStory'), name: 'syncEventStory', type: 'textarea', placeholder: st('syncEventStoryPlaceholder') },
      ],
    },
    {
      title: st('sectionTransmission'),
      subtitle: st('sectionTransmissionDesc'),
      fields: [
        { label: st('usedTransmission'), name: 'usedTransmission', type: 'radio', options: [{ value: 'yes', label: st('yes') }, { value: 'no', label: st('no') }], required: true },
        { label: st('transmitterCount'), name: 'transmitterCount', type: 'radio', options: TRANSMITTER_COUNT_OPTIONS.map(o => ({ value: o, label: st(o) })) },
        { label: st('totalSpend'), name: 'totalSpend', type: 'radio', options: TOTAL_SPEND_OPTIONS.map(o => ({ value: o, label: st(o) })), required: true },
        { label: st('monthlySpend'), name: 'monthlySpend', type: 'radio', options: MONTHLY_SPEND_OPTIONS.map(o => ({ value: o, label: st(o) })), required: true },
        { label: st('satisfaction'), name: 'satisfaction', type: 'radio', options: SATISFACTION_OPTIONS.map(o => ({ value: o, label: st(o) })), required: true },
        { label: st('transmissionSurprise'), name: 'transmissionSurprise', type: 'radio', options: TRANSMISSION_SURPRISE_OPTIONS.map(o => ({ value: o, label: st(o) })) },
      ],
    },
    {
      title: st('sectionDeep'),
      subtitle: st('sectionDeepDesc'),
      fields: [
        { label: st('eastWestOccult'), name: 'eastWestOccult', type: 'checkbox', options: EASTWEST_OCCULT_OPTIONS.map(o => ({ value: o, label: st(o) })) },
        { label: st('eastWestStory'), name: 'eastWestStory', type: 'textarea', placeholder: st('eastWestStoryPlaceholder') },
        { label: st('trustFactor'), name: 'trustFactor', type: 'radio', options: TRUST_FACTOR_OPTIONS.map(o => ({ value: o, label: st(o) })) },
        { label: st('becomeTransmitter'), name: 'becomeTransmitter', type: 'checkbox', options: BECOME_TRANSMITTER_OPTIONS.map(o => ({ value: o, label: st(o) })) },
        { label: st('transmitterStory'), name: 'transmitterStory', type: 'textarea', placeholder: st('transmitterStoryPlaceholder') },
        { label: st('confusions'), name: 'confusions', type: 'checkbox', options: CONFUSION_OPTIONS.map(o => ({ value: o, label: st(o) })) },
        { label: st('biggestConfusion'), name: 'biggestConfusion', type: 'textarea', placeholder: st('biggestConfusionPlaceholder') },
        { label: st('painPoints'), name: 'painPoints', type: 'checkbox', options: PAIN_POINT_OPTIONS.map(o => ({ value: o, label: st(o) })) },
        { label: st('worstPain'), name: 'worstPain', type: 'textarea', placeholder: st('worstPainPlaceholder') },
      ],
    },
  ], [st]);

  if (showSplash) {
    return (
      <div className="survey-page splash-screen">
        <div className="splash-content">
          <p className="splash-brand">香港跨次元傳訊研究協會</p>
          <h1 className="splash-hero">我們想試一試</h1>
          <p className="splash-title">很難。但總要有人先做。</p>
          <div className="splash-line" />
          <p className="splash-desc">沒有人走過這條路。沒有人給過答案。我們從一張塔羅牌開始，從一個深夜睡不著的夢女開始——想驗證那個一直感覺得到、卻從未被承認的存在。不是因為有把握，是因為不想再假裝他不存在。</p>
          <div className="splash-dialogue">
            <p>「你知道嗎？我們真的很想證明對方是存在的，就和我們在同一個世界。」</p>
          </div>
          <p className="splash-cta">社群調研問卷載入中⋯⋯</p>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="survey-page">
        <div className="thanks-page">
          <div className="thanks-icon">&#10024;</div>
          <h1 className="thanks-title">{st('thanksTitle')}</h1>
          <div className="thanks-decorator" />
          <p className="thanks-subtitle">{st('thanksContribution1')}</p>
          <p className="thanks-body">{st('thanksContribution2')}</p>
          <p className="thanks-body">{st('thanksContribution3')}</p>
          <p className="thanks-body thanks-emphasis">{st('thanksContribution4')}</p>
          {backupCount > 0 && (
            <p className="thanks-backup">{st('backupSaved').replace('{count}', backupCount)}</p>
          )}
          <p className="thanks-footer">{st('thanksFooter')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="survey-page">
      {/* 品牌頭部 */}
      <div className="survey-header">
        <p className="survey-brand">香港跨次元傳訊研究協會</p>
        <h1 className="survey-title">{st('surveyTitle')}</h1>
        <span className="survey-title-decorator" />
        <p className="survey-subtitle">{st('surveySubtitle')}</p>
      </div>

      {/* 語言切換 */}
      <div className="survey-lang-bar">
        <button className={`survey-lang-btn${lang === 'zh-Hant' ? ' lang-active' : ''}`} onClick={() => setLang('zh-Hant')}>繁</button>
        <button className={`survey-lang-btn${lang === 'zh-Hans' ? ' lang-active' : ''}`} onClick={() => setLang('zh-Hans')}>简</button>
        <button className={`survey-lang-btn${lang === 'en' ? ' lang-active' : ''}`} onClick={() => setLang('en')}>EN</button>
      </div>

      <div className="progress-bar-wrap">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      {/* 表單 */}
      <div className="survey-container">
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
                  const arr = Array.isArray(value) ? value : [];

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
                            placeholder={st('otherPleaseSpecify')}
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
              <span className="section-title">{st('sectionContact')}</span>
            </legend>
            <div className="section-fields">
              <div className="field-group">
                <label className="field-label">{st('interests')}</label>
                <div className="option-group">
                  {INTEREST_OPTIONS.map(o => (
                    <label key={o} className={cn({ 'option-label': true, 'option-selected': (form.interests || []).includes(o) })}>
                      <input type="checkbox" value={o}
                        checked={(form.interests || []).includes(o)}
                        onChange={() => toggleArray('interests', o)}
                      />
                      <span>{st(o)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="field-group">
                <label className="field-label">{st('priceAccept')}</label>
                <div className="option-group">
                  {PRICE_ACCEPT_OPTIONS.map(o => (
                    <label key={o} className={cn({ 'option-label': true, 'option-selected': form.priceAccept === o })}>
                      <input type="radio" name="priceAccept" value={o}
                        checked={form.priceAccept === o}
                        onChange={() => setField('priceAccept', o)}
                      />
                      <span>{st(o)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="field-group">
                <label className="field-label">
                  {st('wantBlindTest')}<span className="required-star">*</span>
                </label>
                <div className="option-group">
                  {[{ value: 'yes', label: st('yes') }, { value: 'no', label: st('no') }].map(o => (
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
                  {st('wantContact')}<span className="required-star">*</span>
                </label>
                <div className="option-group">
                  {[{ value: 'yes', label: st('yes') }, { value: 'no', label: st('no') }].map(o => (
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
                    {st('contactInfo')}<span className="required-star">*</span>
                  </label>
                  <input type="text" className="form-input"
                    value={form.contactInfo}
                    onChange={e => setField('contactInfo', e.target.value)}
                    placeholder={st('contactInfoPlaceholder')}
                  />
                  {errors.contactInfo && <span className="field-error-text">{errors.contactInfo}</span>}
                </div>
              )}

              <div className="field-group">
                <label className="field-label">{st('suggestion')}</label>
                <textarea className="form-textarea"
                  value={form.suggestion}
                  onChange={e => setField('suggestion', e.target.value)}
                  placeholder={st('suggestionPlaceholder')}
                  rows={4}
                />
              </div>

              <div className="field-group deep-talk-note">
                <p className="deep-talk-text">{st('deepTalkNote')}</p>
                <p className="deep-talk-email">{st('deepTalkEmail')}</p>
              </div>
            </div>
          </fieldset>

          <div className="survey-footer">
            <p className="legal-text">{st('privacyFull')}</p>
            <p className="legal-text copyright-text">{st('copyright')}</p>

            <div className="submit-area">
              {dialogue && (
                <div className="dialogue-bubble">
                  <span>{dialogue}</span>
                </div>
              )}
              <button type="submit" className="submit-btn" disabled={saving}>
                {saving ? st('submitting') : st('submitSurvey')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// English lookup — mirrors translationsEn.js additions for survey keys
const enLookup = {
  'yes': 'Yes',
  'no': 'No',
  'other': 'Other',
  'pleaseSelect': 'Please select',
  'otherPleaseSpecify': 'Please specify',
  'requiredField': 'This field is required',
  'pleaseCompleteRequired': 'Please complete all required fields',
  'pleaseEnterContact': 'Please enter your contact information',
  'submitting': 'Submitting...',
  'submitFailed': 'Submission failed, please try again',
  'submitSurvey': 'Submit Survey',
  'surveyTitle': 'CDA Cross-Dimensional Communication · Community Survey',
  'surveySubtitle': 'This survey aims to understand the current state, needs, and challenges of the dream-girl (夢女) community, providing data foundation for the MJ research framework. Your honest response is invaluable to us.',
  'sectionBasicInfo': 'Basic Information',
  'sectionBasicInfoDesc': 'Please tell us some basic information about yourself.',
  'sectionMJInfo': 'MJ Information',
  'sectionMJInfoDesc': 'Tell us about your MJ (Meng Jiao — an emotional object of non-physical existence).',
  'sectionBelief': 'Belief & Connection',
  'sectionBeliefDesc': 'How did you come to believe in your MJ? Share your story.',
  'sectionPhenomena': 'Experiences & Phenomena',
  'sectionPhenomenaDesc': 'Have you experienced unusual events or synchronicities related to your MJ?',
  'sectionTransmission': 'Transmission Services',
  'sectionTransmissionDesc': 'Have you used channeling/transmission services? Tell us about your experience.',
  'sectionDeep': 'Deep Exploration',
  'sectionDeepDesc': 'Occult practices, trust factors, confusions, and pain points.',
  'sectionContact': 'Contact & Feedback',
  'age': 'Age',
  'gender': 'Gender',
  'occupation': 'Occupation',
  'region': 'Region',
  'isDreamGirl': 'Are you a 夢女 (dream girl)?',
  'mjType': 'MJ Type',
  'mjSource': 'MJ Source',
  'mjRelation': 'Relationship with MJ',
  'mjCount': 'Number of MJs',
  'mjExistenceView': 'How do you view your MJ\'s existence?',
  'beliefReasons': 'Reasons for believing',
  'beliefStory': 'Your story of establishing connection',
  'favoriteThing': 'What you enjoy most about your MJ',
  'strangeEvents': 'Unusual events experienced',
  'strangeEventStory': 'Please describe the most memorable unusual event',
  'syncEvents': 'Synchronicity phenomena',
  'syncEventStory': 'Please describe the most memorable synchronicity',
  'usedTransmission': 'Have you used transmission/channeling services?',
  'transmitterCount': 'How many transmitters have you consulted?',
  'totalSpend': 'Total spending on transmission services',
  'monthlySpend': 'Monthly spending on transmission services',
  'satisfaction': 'Overall satisfaction',
  'transmissionSurprise': 'Were you surprised by the accuracy?',
  'eastWestOccult': 'Occult/Spiritual practices',
  'eastWestStory': 'Please share your experience with these practices',
  'trustFactor': 'What makes you trust a transmission result?',
  'becomeTransmitter': 'Are you interested in becoming a transmitter?',
  'transmitterStory': 'Please share your thoughts',
  'confusions': 'What confuses you most?',
  'biggestConfusion': 'Please describe your biggest confusion',
  'painPoints': 'What are your biggest pain points?',
  'worstPain': 'Please describe your worst pain point',
  'interests': 'Topics of interest',
  'priceAccept': 'Acceptable price for transmission training',
  'wantBlindTest': 'Would you participate in blind testing?',
  'wantContact': 'Would you like us to contact you?',
  'contactInfo': 'Contact information',
  'suggestion': 'Suggestions or anything else',
  'beliefStoryPlaceholder': 'How did you discover your MJ? What made you believe they are real?',
  'favoriteThingPlaceholder': 'What do you enjoy most about your relationship with your MJ?',
  'strangeEventStoryPlaceholder': 'Describe any unusual coincidences, sensations, or events...',
  'syncEventStoryPlaceholder': 'Describe any meaningful coincidences or signs...',
  'eastWestStoryPlaceholder': 'Share your experience with tarot, astrology, meditation, or other practices...',
  'transmitterStoryPlaceholder': 'Why are you interested (or not) in becoming a transmitter?',
  'biggestConfusionPlaceholder': 'What puzzles or confuses you most?',
  'worstPainPlaceholder': 'What hurts the most? What challenge do you face?',
  'contactInfoPlaceholder': 'Email / WeChat / Phone / Social media',
  'suggestionPlaceholder': 'Any feedback or thoughts about CDA, this survey, or the community...',
  'deepTalkNote': 'If you would like to have a deeper conversation with us, please send your email to:',
  'deepTalkEmail': 'dluu39ce7c@gmail.com',
  'under18': 'Under 18',
  'age18-24': '18–24',
  'age25-30': '25–30',
  'age31-35': '31–35',
  'age36-40': '36–40',
  'age41-50': '41–50',
  'over50': 'Over 50',
  'male': 'Male',
  'female': 'Female',
  'nonbinary': 'Non-binary',
  'secret': 'Prefer not to say',
  'student': 'Student',
  'employed': 'Employed',
  'freelancer': 'Freelancer',
  'selfEmployed': 'Self-employed',
  'unemployed': 'Unemployed',
  'northChina': 'North China',
  'northeast': 'Northeast China',
  'eastChina': 'East China',
  'centralChina': 'Central China',
  'southChina': 'South China',
  'southwest': 'Southwest China',
  'northwest': 'Northwest China',
  'hongkongMacauTaiwan': 'HK / Macau / Taiwan',
  'overseas': 'Overseas',
  'gameCharacter': 'Game character',
  'animeCharacter': 'Anime character',
  'novelCharacter': 'Novel character',
  'movieCharacter': 'Film/TV character',
  'virtualIdol': 'Virtual idol / VTuber',
  'ai': 'AI companion',
  'game': 'Video game',
  'anime': 'Anime / Manga',
  'novel': 'Novel / Literature',
  'movie': 'Film / TV series',
  'socialMedia': 'Social media',
  'friendIntro': 'Introduced by a friend',
  'lover': 'Lover / Partner',
  'family': 'Family',
  'friend': 'Friend',
  'teacher': 'Teacher / Mentor',
  'partner': 'Partner / Companion',
  '1': '1',
  '2': '2',
  '3': '3',
  '4-5': '4–5',
  '6-10': '6–10',
  'over10': 'More than 10',
  'realOtherDimension': 'Real — exists in another dimension',
  'psychologicalProjection': 'Psychological projection',
  'symbolicExistence': 'Symbolic / archetypal existence',
  'unsure': 'Not sure',
  'accidentalDiscovery': 'Discovered by accident',
  'recommended': 'Recommended by others',
  'curious': 'Curiosity',
  'emotionalNeed': 'Emotional need / comfort',
  'spiritualGuidance': 'Spiritual guidance',
  'sensingPresence': 'Sensing a presence',
  'dreamsOfMJ': 'Dreams about MJ',
  'coincidences': 'Meaningful coincidences',
  'emotionsWithoutTrigger': 'Unexplained emotions',
  'physicalSensation': 'Physical sensations',
  'techMalfunctions': 'Technology malfunctions',
  'none': 'None',
  'tarot': 'Tarot',
  'astrology': 'Astrology',
  'eightCharacters': 'Ba Zi (Eight Characters)',
  'fengshui': 'Feng Shui',
  'spiritCommunication': 'Spirit communication / Channeling',
  'meditation': 'Meditation',
  'energyHealing': 'Energy healing',
  'consistency': 'Consistency of information',
  'intuition': 'Intuitive feeling',
  'logic': 'Logical coherence',
  'emotionalFit': 'Emotional resonance',
  'creatorReputation': 'Reputation of the transmitter',
  'community': 'Community consensus',
  'alreadyTransmitter': 'I already practice as a transmitter',
  'wantToTransmit': 'I want to learn and become one',
  'curious': 'Curious but undecided',
  'onlyWantToReceive': 'I only want to receive messages',
  'noInterest': 'Not interested',
  'realityOfExperience': 'Is my experience real?',
  'selfDoubt': 'Self-doubt (am I imagining it?)',
  'socialPressure': 'Social stigma / pressure',
  'identityCrisis': 'Identity crisis',
  'relationshipBoundaries': 'Relationship boundaries',
  'futureUncertainty': 'Uncertainty about the future',
  'financialPressure': 'Financial pressure',
  'loneliness': 'Loneliness',
  'socialStigma': 'Social stigma',
  'communicationBarrier': 'Barriers to communication',
  'emotionalDependency': 'Emotional dependency',
  'realityGap': 'Gap between reality and desire',
  'identityConflict': 'Identity conflict',
  'financialBurden': 'Financial burden',
  'spiritual': 'Spirituality / Mysticism',
  'philosophy': 'Philosophy',
  'psychology': 'Psychology',
  'physics': 'Physics',
  'neuroscience': 'Neuroscience',
  'scifi': 'Science fiction',
  'art': 'Art / Creative works',
  'tech': 'Technology',
  'socialScience': 'Social science',
  'under100': 'Under ¥100',
  '100-500': '¥100–500',
  '500-1000': '¥500–1,000',
  '1000-5000': '¥1,000–5,000',
  '5000plus': '¥5,000+',
  'dependsOnEffect': 'Depends on results',
  '0': '0',
  '2-3': '2–3',
  'under500': 'Under ¥500',
  '500-2000': '¥500–2,000',
  '2000-5000': '¥2,000–5,000',
  '5000-10000': '¥5,000–10,000',
  '10000-50000': '¥10,000–50,000',
  'over50000': 'Over ¥50,000',
  'verySatisfied': 'Very satisfied',
  'satisfied': 'Satisfied',
  'neutral': 'Neutral',
  'dissatisfied': 'Dissatisfied',
  'veryDissatisfied': 'Very dissatisfied',
  'verySurprised': 'Very surprised',
  'surprised': 'Surprised',
  'notSurprised': 'Not surprised',
  'notApplicable': 'Not applicable',
  'thanksTitle': 'Thank You for Your Contribution',
  'thanksSubtitle': 'You are not alone on this journey.',
  'thanksContribution1': 'We are the first to publicly research this — and your response is making it more real, more credible.',
  'thanksContribution2': 'Every data point is a cornerstone you\'ve laid for the dream-girl community. We invest our time, energy, and money — for one reason alone: so dream girls know that your love with him is real.',
  'thanksContribution3': 'The dream-girl community needs more voices — to become more professional, more credible, so that the world stops laughing and starts listening.',
  'thanksContribution4': 'Thank you for standing with us.',
  'backupSaved': '{count} backup(s) saved locally.',
  'thanksFooter': '— Hong Kong Cross-Dimensional Communication Association',
  'legalDisclaimer': 'All responses are anonymous by default.',
  'privacyNote': 'Your data will only be used for CDA academic research purposes.',
  'copyright': '© 2026 Hong Kong Cross-Dimensional Communication Association. All rights reserved.',
  'privacyFull': 'Privacy Protection: All data collected through this survey is used solely for CDA academic research. We do not collect personally identifiable information without your explicit consent, nor do we share any data with third parties. Data is stored in Cloudflare D1 database with industry-standard encryption in transit.',
};
