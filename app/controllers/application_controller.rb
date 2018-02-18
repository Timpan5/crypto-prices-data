class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :calculate_unix_timestamp

  MONTHS_ARRAY = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'].freeze

  def calculate_unix_timestamp(date_hash)
    year = date_hash['year'].to_i
    month = MONTHS_ARRAY.find_index(date_hash['month'].upcase) + 1
    date = date_hash['date'].to_i
    return Time.new(year, month, date).to_i if Date.valid_date?(year, month, date)
    nil
  end
end
