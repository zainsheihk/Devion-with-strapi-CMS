import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSeoMeta extends Schema.Component {
  collectionName: 'components_seo_seo_metas';
  info: {
    displayName: 'Seo Meta';
    icon: 'alien';
    description: '';
  };
  attributes: {
    meta_title: Attribute.String;
    meta_description: Attribute.Blocks;
    seo_keywords: Attribute.String;
  };
}

export interface LayoutMenu extends Schema.Component {
  collectionName: 'components_layout_menus';
  info: {
    displayName: 'Menu';
    icon: 'apps';
    description: '';
  };
  attributes: {
    menu_item: Attribute.String;
    meta_title: Attribute.String;
    item_type: Attribute.Enumeration<['link', 'button']> &
      Attribute.DefaultTo<'link'>;
  };
}

export interface LayoutBanner extends Schema.Component {
  collectionName: 'components_layout_banners';
  info: {
    displayName: 'Banner';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Blocks;
    banner_image_1: Attribute.Media<'images'>;
    banner_image_2: Attribute.Media<'images'>;
    button_text_1: Attribute.String;
    button_URL_1: Attribute.String;
    button_text_2: Attribute.String;
    button_URL_2: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.seo-meta': SeoSeoMeta;
      'layout.menu': LayoutMenu;
      'layout.banner': LayoutBanner;
    }
  }
}
