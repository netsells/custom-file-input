(function($) {

    $.fn.fileInput = function(options) {

        var defaults = {
            labelClass: null,
            labelText: 'Upload a file',
        },

        options = $.extend(defaults, options);

        this.each(function() {

            var $this = $(this);

            var inputName = $this.attr('name');
            var inputId = '';

            if (!$this.attr('id')) {
                inputId = 'input-' + inputName;
                $this.attr('id', inputId);
            } else {
                inputId = $this.attr('id');
            }

            var labelId = inputId + '-label';

            var label = $(document.createElement('label'));
            label.attr('for', inputId);
            label.attr('id', labelId);
            label.attr('class', options.labelClass);
            label.text(options.labelText);
            label.css({
                cursor: 'pointer'
            });

            $this.after(label);

            $this.css({ 
                position: 'absolute',
                left: '-9999px'
            });
            
            $this.change(function(e) {
                var filepath = this.value;
                var m = filepath.match(/([^\/\\]+)$/);
                var filename = m[1];
                label.text(filename);
            });

            return this;

        }); // end each

    }

})(jQuery);