<div class="view">
    <input class="toggle" type="checkbox" <%= completed ? 'checked' : '' %>>
    <label><%- title %></label>
    <div class="pull-right">
        <button class="btn btn-danger btn-xs destroy">
            Delete
        </button>
    </div>
</div>
