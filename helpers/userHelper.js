const TokenGenerator = require('uuid-token-generator');

export default function generateToken(){
    const tokgen = new TokenGenerator();
    return tokgen.generate();
}