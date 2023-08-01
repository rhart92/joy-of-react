export interface BookList {
  numFound: number
  start: number
  numFoundExact: boolean
  docs: Doc[]
  num_found: number
  q: string
  offset: null
}

export interface Doc {
  key: string
  type: Type
  seed: string[]
  title: string
  title_sort: string
  title_suggest: string
  edition_count: number
  edition_key?: string[]
  publish_date?: string[]
  publish_year?: number[]
  first_publish_year?: number
  number_of_pages_median?: number
  lccn?: string[]
  publish_place?: string[]
  oclc?: string[]
  contributor?: string[]
  lcc?: string[]
  ddc?: string[]
  isbn?: string[]
  last_modified_i: number
  ebook_count_i: number
  ebook_access: EbookAccess
  has_fulltext: boolean
  public_scan_b: boolean
  ia?: string[]
  ia_collection?: string[]
  ia_collection_s?: string
  lending_edition_s?: string
  lending_identifier_s?: string
  printdisabled_s?: string
  ratings_average?: number
  ratings_sortable?: number
  ratings_count?: number
  ratings_count_1?: number
  ratings_count_2?: number
  ratings_count_3?: number
  ratings_count_4?: number
  ratings_count_5?: number
  readinglog_count?: number
  want_to_read_count?: number
  currently_reading_count?: number
  already_read_count?: number
  cover_edition_key?: string
  cover_i?: number
  publisher?: string[]
  language?: string[]
  author_key?: string[]
  author_name?: string[]
  author_alternative_name?: string[]
  person?: string[]
  place?: string[]
  subject?: string[]
  time?: string[]
  id_alibris_id?: string[]
  id_amazon?: string[]
  id_canadian_national_library_archive?: string[]
  id_depósito_legal?: string[]
  id_goodreads?: string[]
  id_google?: string[]
  id_librarything?: string[]
  id_overdrive?: string[]
  id_paperback_swap?: string[]
  id_wikidata?: string[]
  ia_loaded_id?: string[]
  ia_box_id?: string[]
  publisher_facet?: string[]
  person_key?: string[]
  place_key?: string[]
  time_facet?: string[]
  person_facet?: string[]
  subject_facet?: string[]
  _version_: number
  place_facet?: string[]
  lcc_sort?: string
  author_facet?: string[]
  subject_key?: string[]
  ddc_sort?: string
  time_key?: string[]
  first_sentence?: string[]
  id_amazon_ca_asin?: string[]
  id_amazon_co_uk_asin?: string[]
  id_amazon_de_asin?: string[]
  id_amazon_it_asin?: string[]
  id_bcid?: string[]
  id_better_world_books?: string[]
  id_british_national_bibliography?: string[]
  id_nla?: string[]
  id_bibliothèque_nationale_de_france?: string[]
  id_british_library?: string[]
  id_hathi_trust?: string[]
  id_scribd?: string[]
  subtitle?: string
  id_libris?: string[]
}

export enum EbookAccess {
  Borrowable = 'borrowable',
  NoEbook = 'no_ebook',
}

export enum Type {
  Work = 'work',
}
