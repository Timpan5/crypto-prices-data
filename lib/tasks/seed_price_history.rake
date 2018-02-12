require 'http'

desc 'Seed database with price history'
task :seed_price_history, [:coin, :year] => [ :environment ] do |task, args|
  start_year = args.year.to_i

  (Date.new(start_year, 01, 01)..Date.today).each do |date|
    puts date.to_s
    timestamp = date.to_time.to_i
    result = HTTP.get("https://min-api.cryptocompare.com/data/dayAvg?fsym=#{args.coin}&tsym=USD&toTs=#{timestamp}")
    History.create(coin: args.coin, timestamp: timestamp, price: result.parse["USD"])
    sleep 0.2
  end
end
