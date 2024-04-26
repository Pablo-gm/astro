export interface APIArt {
    pagination: Pagination;
    data:       Datum[];
    info:       Info;
    config:     Config;
}

export interface Config {
    iiif_url:    string;
    website_url: string;
}

export interface Datum {
    id:                            number;
    api_model:                     APIModel;
    api_link:                      string;
    is_boosted:                    boolean;
    title:                         string;
    alt_titles:                    string[] | null;
    thumbnail:                     Thumbnail | null;
    main_reference_number:         string;
    has_not_been_viewed_much:      boolean;
    boost_rank:                    null;
    date_start:                    number;
    date_end:                      number;
    date_display:                  string;
    date_qualifier_title:          DateQualifierTitle;
    date_qualifier_id:             number | null;
    artist_display:                string;
    place_of_origin:               string;
    description:                   null | string;
    short_description:             null;
    dimensions:                    string;
    dimensions_detail:             DimensionsDetail[];
    medium_display:                string;
    inscriptions:                  null | string;
    credit_line:                   string;
    catalogue_display:             null;
    publication_history:           null | string;
    exhibition_history:            null | string;
    provenance_text:               null | string;
    edition:                       null;
    publishing_verification_level: PublishingVerificationLevel;
    internal_department_id:        number;
    fiscal_year:                   number | null;
    fiscal_year_deaccession:       null;
    is_public_domain:              boolean;
    is_zoomable:                   boolean;
    max_zoom_window_size:          number;
    copyright_notice:              null | string;
    has_multimedia_resources:      boolean;
    has_educational_resources:     boolean;
    has_advanced_imaging:          boolean;
    colorfulness:                  number | null;
    color:                         Color | null;
    latitude:                      number | null;
    longitude:                     number | null;
    latlon:                        null | string;
    is_on_view:                    boolean;
    on_loan_display:               null;
    gallery_title:                 null | string;
    gallery_id:                    number | null;
    nomisma_id:                    null;
    artwork_type_title:            string;
    artwork_type_id:               number;
    department_title:              DepartmentTitle;
    department_id:                 DepartmentID;
    artist_id:                     number;
    artist_title:                  string;
    alt_artist_ids:                any[];
    artist_ids:                    number[];
    artist_titles:                 string[];
    category_ids:                  string[];
    category_titles:               string[];
    term_titles:                   string[];
    style_id:                      null | string;
    style_title:                   null | string;
    alt_style_ids:                 any[];
    style_ids:                     string[];
    style_titles:                  string[];
    classification_id:             string;
    classification_title:          string;
    alt_classification_ids:        string[];
    classification_ids:            string[];
    classification_titles:         string[];
    subject_id:                    null | string;
    alt_subject_ids:               string[];
    subject_ids:                   string[];
    subject_titles:                string[];
    material_id:                   null | string;
    alt_material_ids:              string[];
    material_ids:                  string[];
    material_titles:               string[];
    technique_id:                  null;
    alt_technique_ids:             any[];
    technique_ids:                 any[];
    technique_titles:              any[];
    theme_titles:                  string[];
    image_id:                      null | string;
    alt_image_ids:                 string[];
    document_ids:                  any[];
    sound_ids:                     any[];
    video_ids:                     any[];
    text_ids:                      any[];
    section_ids:                   number[];
    section_titles:                string[];
    site_ids:                      any[];
    suggest_autocomplete_all:      SuggestAutocompleteAll[];
    source_updated_at:             Date;
    updated_at:                    Date;
    timestamp:                     Date;
}

export enum APIModel {
    Artworks = "artworks",
}

export interface Color {
    h:          number;
    l:          number;
    s:          number;
    percentage: number;
    population: number;
}

export enum DateQualifierTitle {
    C = "c.",
    Empty = "",
}

export enum DepartmentID {
    PC3 = "PC-3",
    PC8 = "PC-8",
    PC9 = "PC-9",
}

export enum DepartmentTitle {
    AppliedArtsOfEurope = "Applied Arts of Europe",
    ArtsOfTheAmericas = "Arts of the Americas",
    ContemporaryArt = "Contemporary Art",
}

export interface DimensionsDetail {
    depth:         number | null;
    width:         number | null;
    height:        number;
    diameter:      null;
    clarification: null;
}

export enum PublishingVerificationLevel {
    WebBasic = "Web Basic",
    WebCataloged = "Web Cataloged",
    WebEverything = "Web Everything",
}

export interface SuggestAutocompleteAll {
    input:    string[];
    contexts: Contexts;
    weight?:  number;
}

export interface Contexts {
    groupings: Grouping[];
}

export enum Grouping {
    Accession = "accession",
    Title = "title",
}

export interface Thumbnail {
    lqip:     string;
    width:    number;
    height:   number;
    alt_text: string;
}

export interface Info {
    license_text:  string;
    license_links: string[];
    version:       string;
}

export interface Pagination {
    total:        number;
    limit:        number;
    offset:       number;
    total_pages:  number;
    current_page: number;
    next_url:     string;
}
