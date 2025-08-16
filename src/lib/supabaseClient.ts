import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://mfffvbqgwaeqbravnyzm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mZmZ2YnFnd2FlcWJyYXZueXptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzODIzNDcsImV4cCI6MjA3MDk1ODM0N30.1hqvPuWFaKpffqjYEtpNPEkC0lSt5oUBbW4ceIoSjME'
);
