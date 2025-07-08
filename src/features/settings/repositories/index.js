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
    getSettings: (...args) => getRepository().getSettings(...args),
    saveSettings: (...args) => getRepository().saveSettings(...args),
    getPresets: (...args) => getRepository().getPresets(...args),
    getPresetTemplates: (...args) => getRepository().getPresetTemplates(...args),
    createPreset: (...args) => getRepository().createPreset(...args),
    updatePreset: (...args) => getRepository().updatePreset(...args),
    deletePreset: (...args) => getRepository().deletePreset(...args),
};