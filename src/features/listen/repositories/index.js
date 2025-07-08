const sqliteRepository = require('./sqlite.repository');
// const firebaseRepository = require('./firebase.repository'); // Future implementation
const authService = require('../../../common/services/authService');

function getRepository() {
    // In the future, we can check the user's login status from authService
    // const user = authService.getCurrentUser();
    // if (user.isLoggedIn) {
    //     return firebaseRepository;
    // }
    return sqliteRepository;
}

// Directly export functions for ease of use, decided by the strategy
module.exports = {
    addTranscript: (...args) => getRepository().addTranscript(...args),
    saveSummary: (...args) => getRepository().saveSummary(...args),
    getAllTranscriptsBySessionId: (...args) => getRepository().getAllTranscriptsBySessionId(...args),
    getSummaryBySessionId: (...args) => getRepository().getSummaryBySessionId(...args),
}; 