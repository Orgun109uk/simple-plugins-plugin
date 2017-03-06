/**
 * A sample simple plugin.
 */

'use strict';

module.exports = class SamplePlugin2 {
    /**
     * Plugin constructor.
     *
     * @param {Object} manager The manager which created this plugin instance.
     */
    constructor(manager) {
        this.manager = manager;
    }

    /**
     * Boot this instance of the plugin.
     *
     * @param {Function} done The done callback.
     */
    boot(done) {
        const me = this;
        this.pluginId = this.manager.pluginId(this);

        this.manager.on('plugins.booted', function(next) {
            if (!this.result) {
                this.result = {};
            }

            this.result[me.pluginId] = 'Hello';
            next();
        });

        done();
    }

    /**
     * The manager is sending a message to this plugin instance.
     *
     * @param {Function} done The callback to call when the message has been executed.
     * @param {String} messageId The ID of the message being sent.
     * @param {String} senderId The PluginID of the plugin sending the message, or null if from the manager directly.
     * @param {Object} data Any data provided with the message call.
     */
    message(done, messageId, senderId, data) {
        switch (messageId) {
            case 'hello':
                return done('Hello to you too.');

            case 'info':
                return done({
                    field1: 'value1',
                    field2: 'value2'
                });

            case 'goodbye':
                return done('Ok, bye.');
        }

        done();
    }
};