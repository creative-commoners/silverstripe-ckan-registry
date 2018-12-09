import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { loadComponent } from 'lib/Injector';

jQuery.entwine('ss', ($) => {
  $('.js-injector-boot .ckan-resource-locator__container').entwine({
    onmatch() {
      const context = {};
      const CKANResourceLocator = loadComponent('CKANResourceLocator', context);
      const schemaData = this.data('schema');

      const props = {
        name: this.attr('name'),
        defaultEndpoint: schemaData.defaultEndpoint || null,
        description: schemaData.description.html || '',
      };

      ReactDOM.render(
        <CKANResourceLocator {...props} />,
        this[0]
      );
    }
  });
});
