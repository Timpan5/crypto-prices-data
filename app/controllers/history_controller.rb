class HistoryController < ApplicationController
  def lookup
    start_date = calculate_unix_timestamp(JSON.parse(params[:start]))
    end_date = calculate_unix_timestamp(JSON.parse(params[:end]))
    coin = 'BTC'

    render :json => {success: false, error: 'Invalid dates'} and return unless start_date && end_date
    render :json => {success: false, error: 'End date is not after start date'} and return unless start_date < end_date

    data = History.where({coin: coin, timestamp: start_date..end_date}).pluck(:timestamp, :price)

    result = {success: true, history: data}
    render :json => result
  end
end
