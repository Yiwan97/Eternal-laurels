import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let headera = {'accept-languaje': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en-US', 'es-ES']
let defaultLocale = 'en-US';

match(languages, locales, defaultLocale)
