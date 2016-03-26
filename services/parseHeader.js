// parseUA.js

var parseHeaders = {
    /**
     * getSoftware. Takes user-agent and returns everything in the first parenthesis.
     * 
     * @param stinrg userAgent
     * 
     * @return string
     */
    getSoftware: function(userAgent) {
        var firstIndex = userAgent.indexOf('(');
        var lastIndex = userAgent.indexOf(')');
        if (firstIndex < 0) {
            return null;
        }
        return userAgent.slice(firstIndex + 1, lastIndex);
    },
    
    /**
     * getLanguage. Takes accept-language and returns first language.
     * 
     * @param string lang
     * 
     * @return string
     */
    getLanguage: function(lang) {
        var lang = lang.split(',')[0];
        if (!lang) {
            return null;
        }
        return lang;
    },
    
    getIP: function(req) {
        return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    }
    
    
};

module.exports = parseHeaders;