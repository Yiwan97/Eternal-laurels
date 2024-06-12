import DOMPurify from 'dompurify';

const sanitizedHTML = DOMPurify.sanitize(unsafeHTML);