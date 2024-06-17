if (!BocchiTheCookie) var BocchiTheCookie = {
    name: 'BocchiTheCookie',
    version: '1.0',
    isLoaded: false,

    init: function () {
        Game.Loader.Replace('perfectCookie.png', this.dir + '/bocchi.png');
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
