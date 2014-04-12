
module.exports = {

    isCompatible: function (payload) {
        return payload.repository &&
               payload.repository.url &&
               payload.ref
    },

    process: function (payload) {
        return {
            repo: 'git@github.com:' +
                   payload.repository.url.replace('https://github.com/', '') +
                   '.git',
            branch: payload.ref.replace('refs/heads/', '')
        };
    }
};
