var _cio = _cio || [];

  (function() {
    var a,b,c;a=function(f){return function(){_cio.push([f].
    concat(Array.prototype.slice.call(arguments,0)))}};b=["identify",
    "track"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
    var t = document.createElement('script'),
        s = document.getElementsByTagName('script')[0];
    t.async = true;
    t.id    = 'cio-tracker';
    // dev
    // t.setAttribute('data-site-id', 'c61186a97e7ef053c635');

    // prod
    t.setAttribute('data-site-id', '3b8c5defaffee5ce229b');

    t.src = 'https://assets.customer.io/assets/track.js';
    s.parentNode.insertBefore(t, s);
})();