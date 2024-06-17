if (!BocchiTheCookie) var BocchiTheCookie = {
    name: 'BocchiTheCookie',
    version: '1.0',
    isLoaded: false,

    init: function () {

        // Cookie replacements.
        // TODO: Replace gold cookie
        Game.Loader.Replace('perfectCookie.png', this.dir + '/bocchi.png');
        
        // Wrinkler replacements.
        // TODO: maybe add more bocchi characters as wrinklers.
        Game.Loader.Replace('wrinkler.png', this.dir + '/bocchi_wrinkler.png');
        Game.Loader.Replace('winterWrinkler.png', this.dir + '/bocchi_winterWrinkler.png');
        Game.Loader.Replace('shinyWrinkler.png', this.dir + '/bocchi_shinyWrinkler.png');
        // TODO: Bocchi wrinkler shadows could look better.
        Game.Loader.Replace('wrinklerShadow.png', this.dir + '/bocchi_wrinklerShadow.png');

        Game.Notify(`Bocchi The Cookie! is ready`, 'You can now give some headpats.', [0, 3]);
        this.isLoaded = true;
    },

    register: function () {
        Game.registerMod(this.name, this);
    }
}

if (!BocchiTheCookie.isLoaded) {
    BocchiTheCookie.register();
}
