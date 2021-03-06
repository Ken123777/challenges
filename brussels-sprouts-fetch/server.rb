require "sinatra"
require "sinatra/json"
require "json"
require "pry"

set :bind, '0.0.0.0'

set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/app/views"

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

# HOW TO READ OUR FILE:
def read_dishes
  JSON.parse(File.read("dishes.json"))
end

# API ENDPOINTS

get "/api/v1/random-recipe" do
  dish = read_dishes.sample

  content_type :json
  json dish
end

get "/api/v1/recipes" do
  dishes = read_dishes

  content_type :json
  json dishes
end

get "/api/v1/longest-recipe" do
  dishes = read_dishes
  # if it is the longest dish,
  # dishes = read_dishes.longest or something

  content_type :json
  json dish
end

get "*" do
  erb :home
end
