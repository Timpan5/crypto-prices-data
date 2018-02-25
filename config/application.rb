require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module CryptoPrices
  class Application < Rails::Application
    config.middleware.insert(0, Rack::ReverseProxy) do
      reverse_proxy_options preserve_host: true
      reverse_proxy '/api/v1.1/public/getticker', 'https://bittrex.com/'
      reverse_proxy '/api/2/public/ticker/', 'https://api.hitbtc.com/'
      reverse_proxy '/api/v1/ticker.do', 'https://www.okex.com/'
    end
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
