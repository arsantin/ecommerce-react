import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  'https://vxmhqwsaxnlvxruoplrq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNTg3MjM0MSwiZXhwIjoxOTQxNDQ4MzQxfQ.vIMGcgF1MqtFh701p5F1igfN3BM1y20saYB05YxmMvY'
)