

let navigator = window ? window.navigator : null;
// let document = window ? window.document : null;

let typeofstr = typeof '';
let typeofobj = typeof {};
let typeoffn = typeof function(){};
let typeofhtmlele = typeof HTMLElement;

let instanceStr = function( obj ){
  return obj && obj.instanceString && fn( obj.instanceString ) ? obj.instanceString() : null;
};

 const defined = obj =>
  obj != null; // not undefined or null

 const string = obj =>
  obj != null && typeof obj == typeofstr;

 const fn = obj =>
  obj != null && typeof obj === typeoffn;

 const array = obj =>
  !(elementOrCollection(obj)) && (Array.isArray ? Array.isArray( obj ) : obj != null && obj instanceof Array);

 const plainObject = obj =>
  obj != null && typeof obj === typeofobj && !array( obj ) && obj.constructor === Object;

 const object = obj =>
  obj != null && typeof obj === typeofobj;

 const number = obj =>
  obj != null && typeof obj === typeof 1 && !isNaN( obj );

 const integer = obj =>
  number( obj ) && Math.floor( obj ) === obj;

 const bool = obj =>
  obj != null && typeof obj === typeof true;

 const htmlElement = obj => {
  if( 'undefined' === typeofhtmlele ){
    return undefined;
  } else {
    return null != obj && obj instanceof HTMLElement;
  }
};

 const elementOrCollection = obj =>
  element( obj ) || collection( obj );

 const element = obj =>
  instanceStr( obj ) === 'collection' && obj._private.single;

 const collection = obj =>
  instanceStr( obj ) === 'collection' && !obj._private.single;

 const core = obj =>
  instanceStr( obj ) === 'core';

 const style = obj =>
  instanceStr( obj ) === 'style';

 const stylesheet = obj =>
  instanceStr( obj ) === 'stylesheet';

 const event = obj =>
  instanceStr( obj ) === 'event';

 const thread = obj =>
  instanceStr( obj ) === 'thread';

 const fabric = obj =>
  instanceStr( obj ) === 'fabric';

 const emptyString = obj => {
  if( obj === undefined || obj === null ){ // null is empty
    return true;
  } else if( obj === '' || obj.match( /^\s+$/ ) ){
    return true; // empty string is empty
  }

  return false; // otherwise, we don't know what we've got
};

 const nonemptyString = obj => {
  if( obj && string( obj ) && obj !== '' && !obj.match( /^\s+$/ ) ){
    return true;
  }

  return false;
};

 const domElement = obj => {
  if( typeof HTMLElement === 'undefined' ){
    return false; // we're not in a browser so it doesn't matter
  } else {
    return obj instanceof HTMLElement;
  }
};

 const boundingBox = obj =>
  plainObject( obj ) &&
    number( obj.x1 ) && number( obj.x2 ) &&
    number( obj.y1 ) && number( obj.y2 )
  ;

 const promise = obj =>
  object( obj ) && fn( obj.then );

 const touch = () =>
  window && ( ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch );

 const gecko = () =>
  window && ( typeof InstallTrigger !== 'undefined' || ('MozAppearance' in document.documentElement.style) );

 const webkit = () =>
  window && ( typeof webkitURL !== 'undefined' || ('WebkitAppearance' in document.documentElement.style) );

 const chromium = () =>
  window && ( typeof chrome !== 'undefined' );

 const khtml = () =>
  navigator && navigator.vendor.match( /kde/i ); // probably a better way to detect this...

 const khtmlEtc = () =>
  khtml() || webkit() || chromium();

 const ms = () =>
  navigator && navigator.userAgent.match( /msie|trident|edge/i ); // probably a better way to detect this...

 const windows = () =>
  navigator && navigator.appVersion.match( /Win/i );

 const mac = () =>
  navigator && navigator.appVersion.match( /Mac/i );

 const linux = () =>
  navigator && navigator.appVersion.match( /Linux/i );

 const unix = () =>
  navigator && navigator.appVersion.match( /X11/i );
