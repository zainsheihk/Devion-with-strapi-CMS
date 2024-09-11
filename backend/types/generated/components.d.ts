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

export interface LayoutWorkSection extends Schema.Component {
  collectionName: 'components_layout_work_sections';
  info: {
    displayName: 'Work Section';
    icon: 'alien';
  };
  attributes: {
    heading: Attribute.Blocks;
    button_text_1: Attribute.String;
    button_url_1: Attribute.String;
    button_text_2: Attribute.String;
    button_url_2: Attribute.String;
  };
}

export interface LayoutVideoSection extends Schema.Component {
  collectionName: 'components_layout_video_sections';
  info: {
    displayName: 'Video Section';
    icon: 'alien';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    heading: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface LayoutTestimonials extends Schema.Component {
  collectionName: 'components_layout_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'alien';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    name: Attribute.String;
    testimonial: Attribute.Text;
    designation: Attribute.String;
  };
}

export interface LayoutSocialMedia extends Schema.Component {
  collectionName: 'components_layout_social_medias';
  info: {
    displayName: 'social media';
    icon: 'alien';
  };
  attributes: {
    link: Attribute.String;
    type: Attribute.Enumeration<['facebook', 'linkedin', 'twitter']>;
  };
}

export interface LayoutNumberSection extends Schema.Component {
  collectionName: 'components_layout_number_sections';
  info: {
    displayName: 'Number Section';
    icon: 'alien';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    card: Attribute.Component<'layout.card', true>;
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

export interface LayoutCard extends Schema.Component {
  collectionName: 'components_layout_cards';
  info: {
    displayName: 'Card';
    icon: 'alien';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    number: Attribute.String;
    description: Attribute.String;
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
      'layout.work-section': LayoutWorkSection;
      'layout.video-section': LayoutVideoSection;
      'layout.testimonials': LayoutTestimonials;
      'layout.social-media': LayoutSocialMedia;
      'layout.number-section': LayoutNumberSection;
      'layout.menu': LayoutMenu;
      'layout.card': LayoutCard;
      'layout.banner': LayoutBanner;
    }
  }
}
