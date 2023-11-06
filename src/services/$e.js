import CryptoJS from "crypto-js"
var getKeyAndIV = function(password) {
    var iterations = 234;
    var text="hi there"
    while(text.length<22)
        text=text+"0"
    console.log(text)
    var salt = CryptoJS.enc.Base64.parse(text);
    var iv128Bits = CryptoJS.PBKDF2(password, salt, { keySize: 128 / 32, iterations: iterations });
    var key256Bits = CryptoJS.PBKDF2(password, salt, { keySize: 256 / 32, iterations: iterations });

    return {
        iv: iv128Bits,
        key: key256Bits
    };
};
var skey = getKeyAndIV('atc123');
export default {
    install(Vue) {
        Vue.config.globalProperties.$e = {
            encrypt(message){
                return CryptoJS.AES.encrypt(message, skey.key, { iv: skey.iv }).ciphertext.toString(CryptoJS.enc.Base64);
            }
        }
    }
}