/*
  EmailJS ayarları tek yerde.

  Not: EmailJS public key'i tanımı gereği tarayıcıya açık gider, gizli bir
  anahtar değildir — kötüye kullanımı EmailJS panelindeki "allowed origins"
  ayarıyla engellenir. Yine de değerleri .env ile ezebilmek için burada
  topladık. Daha önce init() ile send() farklı public key kullanıyordu.
*/
export const EMAILJS_PUBLIC_KEY =
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'ipF6aclGp6BxGrKjK';

export const EMAILJS_SERVICE_ID =
  process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_ewpo9bo';

export const EMAILJS_TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_zbj7xko';
