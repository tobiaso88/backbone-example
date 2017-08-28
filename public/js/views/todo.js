define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/todo.tpl'
], function ($, _, Backbone, todoTemplate) {
    'use strict';

    var TodoView = Backbone.View.extend({
        tagName:  'li',
        className: 'list-group-item',
        template: _.template(todoTemplate),
        events: {
            'click .toggle': 'toggleCompleted',
            'click .destroy': 'clear',
        },
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.toggleClass('completed', this.model.get('completed'));
            return this;
        },
        toggleCompleted: function () {
            this.model.toggle();
        },
        clear: function () {
            this.model.destroy();
        }
    });

    return TodoView;
});
