# frozen_string_literal: true

class PricesController < ApplicationController
  layout "prices"

  def index
    @prices_props = { dev_environment: Rails.env.development? }
  end
end
