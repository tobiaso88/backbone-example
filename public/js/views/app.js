define([
    'jquery',
    'underscore',
    'backbone',
    'collections/todos',
    'views/todo'
], function ($, _, Backbone, Todos, TodoView) {
    'use strict';

    var AppView = Backbone.View.extend({
        el: '#app',
        events: {
            'keypress #new-todo': 'createOnEnter'
        },
        initialize: function () {
            this.$input = this.$('#new-todo');
            this.$todoList = this.$('.todos');

            this.listenTo(Todos, 'add', this.addOne);
            this.listenTo(Todos, 'reset', this.addAll);
            this.listenTo(Todos, 'all', _.debounce(this.render, 0));

            Todos.fetch({reset:true});
        },
        render: function () {
            //
        },
        addOne: function (todo) {
            var view = new TodoView({ model: todo });
            this.$todoList.append(view.render().el);
        },
        addAll: function () {
            this.$todoList.empty();
            Todos.each(this.addOne, this);
        },
        createOnEnter: function(e) {
            if (e.which !== 13 || !this.$input.val().trim()) {
                return;
            }
            Todos.create({
                title: this.$input.val().trim(),
                order: Todos.nextOrder(),
                completed: false
            });
            this.$input.val('');
        }
    });

    return AppView;
});
