CREATE TABLE IF NOT EXISTS submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp TEXT DEFAULT (datetime('now')),
  user_agent TEXT,
  ip TEXT,
  age TEXT,
  gender TEXT,
  occupation TEXT,
  region TEXT,
  is_dream_girl TEXT,
  mj_type TEXT,
  mj_type_other TEXT,
  mj_source TEXT,
  mj_source_other TEXT,
  mj_relation TEXT,
  mj_count TEXT,
  mj_existence_view TEXT,
  belief_reasons TEXT,
  belief_story TEXT,
  favorite_thing TEXT,
  strange_events TEXT,
  strange_event_story TEXT,
  sync_events TEXT,
  sync_event_story TEXT,
  used_transmission TEXT,
  transmitter_count TEXT,
  total_spend TEXT,
  monthly_spend TEXT,
  satisfaction TEXT,
  transmission_surprise TEXT,
  east_west_occult TEXT,
  east_west_story TEXT,
  trust_factor TEXT,
  become_transmitter TEXT,
  transmitter_story TEXT,
  confusions TEXT,
  biggest_confusion TEXT,
  pain_points TEXT,
  worst_pain TEXT,
  interests TEXT,
  price_accept TEXT,
  want_blind_test TEXT,
  want_contact TEXT,
  contact_info TEXT,
  suggestion TEXT
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp TEXT DEFAULT (datetime('now')),
  user_agent TEXT,
  ip TEXT,
  name TEXT NOT NULL,
  contact TEXT NOT NULL,
  inquiry_type TEXT,
  inquiry_label TEXT,
  role TEXT,
  service_interest TEXT,
  mj_context TEXT,
  message TEXT NOT NULL,
  consent INTEGER DEFAULT 0,
  language TEXT,
  status TEXT DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_submissions_timestamp ON submissions(timestamp);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_timestamp ON contact_submissions(timestamp);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

CREATE TABLE IF NOT EXISTS service_orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  queue_no TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  client_name TEXT NOT NULL,
  contact TEXT,
  channel TEXT,
  source TEXT,
  service_type TEXT,
  status TEXT DEFAULT 'new',
  priority TEXT DEFAULT 'normal',
  practitioner TEXT,
  appointment_at TEXT,
  deadline_at TEXT,
  follow_up_at TEXT,
  info_status TEXT DEFAULT '未确认',
  intent_level TEXT DEFAULT 'normal',
  price REAL DEFAULT 0,
  paid REAL DEFAULT 0,
  payment_status TEXT,
  tags TEXT,
  deliverable TEXT,
  notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_service_orders_status ON service_orders(status);
CREATE INDEX IF NOT EXISTS idx_service_orders_created_at ON service_orders(created_at);
CREATE INDEX IF NOT EXISTS idx_service_orders_appointment_at ON service_orders(appointment_at);
