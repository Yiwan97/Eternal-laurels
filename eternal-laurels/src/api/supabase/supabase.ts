import { createClient } from '@supabase/supabase-js'

//const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseUrl = 'https://gxpjalskawsilvqwcyrn.supabase.co'
//const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4cGphbHNrYXdzaWx2cXdjeXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MDcwMDAsImV4cCI6MjAyNjA4MzAwMH0.bXKRoaWpT6xlg768kMLCq3uswqR-tqAYNBs928_EUHI'

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;