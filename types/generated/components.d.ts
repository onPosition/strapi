import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentButton extends Struct.ComponentSchema {
  collectionName: 'components_component_buttons';
  info: {
    displayName: 'button';
    icon: 'cursor';
  };
  attributes: {
    link: Schema.Attribute.Text & Schema.Attribute.Required;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 15;
      }>;
  };
}

export interface ComponentHeader extends Struct.ComponentSchema {
  collectionName: 'components_component_headers';
  info: {
    description: '';
    displayName: 'header';
    icon: 'bold';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentMenu extends Struct.ComponentSchema {
  collectionName: 'components_component_menus';
  info: {
    description: '';
    displayName: 'menu';
    icon: 'dashboard';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button', false>;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    menu_items: Schema.Attribute.Component<'component.menu-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

export interface ComponentMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_component_menu_items';
  info: {
    displayName: 'menu_item';
    icon: 'command';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DinamycZoneCta extends Struct.ComponentSchema {
  collectionName: 'components_dinamyc_zone_ctas';
  info: {
    description: '';
    displayName: 'CTA';
    icon: 'cursor';
  };
  attributes: {
    service: Schema.Attribute.Relation<'oneToOne', 'api::service.service'>;
    text: Schema.Attribute.Text;
  };
}

export interface DinamycZoneRelatedPosts extends Struct.ComponentSchema {
  collectionName: 'components_dinamyc_zone_related_posts';
  info: {
    description: '';
    displayName: 'related_posts';
    icon: 'bulletList';
  };
  attributes: {
    kategorii_postovs: Schema.Attribute.Relation<
      'oneToMany',
      'api::posts-category.posts-category'
    >;
    posts: Schema.Attribute.Relation<'oneToMany', 'api::post.post'>;
    related_enum: Schema.Attribute.Enumeration<['test1', 'test2', 'test3']>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041F\u043E\u0441\u0442\u044B \u043F\u043E \u044D\u0442\u043E\u0439 \u0442\u0435\u043C\u0435'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.button': ComponentButton;
      'component.header': ComponentHeader;
      'component.menu': ComponentMenu;
      'component.menu-item': ComponentMenuItem;
      'dinamyc-zone.cta': DinamycZoneCta;
      'dinamyc-zone.related-posts': DinamycZoneRelatedPosts;
    }
  }
}
