require "rubygems"
require "liquid"
require "json"

module Jekyll

  class ReorderedCats
    @categories
    def initialize (site)
      @categories = site.categories
    end

  def get
      categories = {}
      @categories.each do |key, cats|
        categories[key] = cats.sort_by {|a| a.date }.reverse
      end
      categories
    end
  end


  class JSONPages < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      site = context.registers[:site]
      
      categories = Jekyll::ReorderedCats.new(site)
      newcat = categories.get
      
      output = '['
      site.pages.each do |page|
        if page.data['id']
          
          p_content = Liquid::Template.parse(page.content.gsub(/site.categories/, 'page_categories')).render('page_categories' => newcat)
          json_content = p_content.to_json

          output += '{"id":"' + page.data['id'] + '", "title":"' + page.data['title'] + '", "content": ' + json_content + '},'
          
        end
        
      end
        output += 'null]'

      output
    end
  end

end


Liquid::Template.register_tag('cached_pages', Jekyll::JSONPages)
