if (!BocchiTheCookie) var BocchiTheCookie = {
    name: 'BocchiTheCookie',
    version: '1.1',
    isLoaded: false,

    init: function () {
        // Cookie replacements.
        // TODO: Add reindeer 'cookies'
        Game.Loader.Replace('perfectCookie.png', this.dir + '/bocchi_cookie.png');
        Game.Loader.Replace('goldCookie.png', this.dir + '/bocchi_goldCookie.png');
        Game.Loader.Replace('wraithCookie.png', this.dir + '/bocchi_wrathCookie.png');
        // Replaces contacts. TODO: Add special varians for bocchi contracts.
        Game.Loader.Replace('contract.png', this.dir + '/bocchi_contract.png');
        Game.Loader.Replace('wrathContract.png', this.dir + '/bocchi_wrathContract.png');
        
        // Wrinkler replacements.
        // TODO: maybe add more bocchi characters as wrinklers.
        Game.Loader.Replace('wrinkler.png', this.dir + '/bocchi_wrinkler.png');
        Game.Loader.Replace('winterWrinkler.png', this.dir + '/bocchi_winterWrinkler.png');
        Game.Loader.Replace('shinyWrinkler.png', this.dir + '/bocchi_shinyWrinkler.png');

        // FIXME: wrinklers googlies are empty at the moment :(
        Game.Loader.Replace('wrinklerBlink.png', this.dir + '/bocchi_wrinklerBlink.png')
        Game.Loader.Replace('wrinklerGooglies.png', this.dir + '/bocchi_wrinklerGooglies.png')
        // TODO: Bocchi wrinkler shadows could look better.
        Game.Loader.Replace('wrinklerShadow.png', this.dir + '/bocchi_wrinklerShadow.png');

        Game.Notify(`Bocchi The Cookie! is ready`, 'You can now give some headpats.', [0, 3]);
        this.isLoaded = true;

        // TODO: Add options menu without relying on CCSE.
    },

    register: function () {
        Game.registerMod(this.name, this);
    },
}

// Load mod if mod wasn't lodaed anytime before. SHOULD NEVER BE THE CASE!
if (!BocchiTheCookie.isLoaded) {
    BocchiTheCookie.register();
}