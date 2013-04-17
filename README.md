# jQuery Custom File Input
This plugin transforms a standard ugly file input into a custom selector stylable with CSS (and a background image as shown in the below example).

> At the time of writing, this plugin has only been tested on chrome on OSX

## Usage

Simply include jQuery, the plugin and call it on a single input or many.

    <script src="/js/custom-file-input/jquery.file-input.js"></script>
    <script>
        $(document).ready(function() {
            
            $('#job_description_file').fileInput({
                labelClass: 'file-select',
                labelText: 'Upload a file'
            });
    
        });
    </script>

## Screenshots

### Before

![](http://f.cl.ly/items/2T0g450L0o040t3d4045/Screen%20Shot%202013-04-17%20at%2013.12.22_standard.png)

![](http://f.cl.ly/items/3d2Y250F272I0M2X2j3L/Screen%20Shot%202013-04-17%20at%2013.12.48_standard.png)

### After

![](http://f.cl.ly/items/2E3i0s3p2o2l0N1X3R2K/Screen%20Shot%202013-04-17%20at%2013.12.59_standard.png)

![](http://f.cl.ly/items/2J3e3h0o1T2c0O3i2Y3o/Screen%20Shot%202013-04-17%20at%2013.13.11_standard.png)