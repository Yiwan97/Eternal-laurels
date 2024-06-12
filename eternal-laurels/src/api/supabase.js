import { createClient } from "@supabase/supabase-js";

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4cGphbHNrYXdzaWx2cXdjeXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MDcwMDAsImV4cCI6MjAyNjA4MzAwMH0.bXKRoaWpT6xlg768kMLCq3uswqR-tqAYNBs928_EUHI'
const supabaseUrl = 'https://gxpjalskawsilvqwcyrn.supabase.co';
//const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
//const supabase = createClient('https://gxpjalskawsilvqwcyrn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4cGphbHNrYXdzaWx2cXdjeXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MDcwMDAsImV4cCI6MjAyNjA4MzAwMH0.bXKRoaWpT6xlg768kMLCq3uswqR-tqAYNBs928_EUHI')
