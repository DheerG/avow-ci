
module.exports = {

    isCompatible: function (payload) {
        return payload.repository &&
               payload.repository.absolute_url &&
               payload.commits &&
               payload.commits.length
    },

    process: function (payload) {
        return {
            repo: 'git@bitbucket.org:' +
                  payload.repository.absolute_url.substring(1, payload.repository.absolute_url.length - 1) +
                  '.git',
            branch: payload.commits[0].branch
        };
    }
};
