require 'test_helper'

class HistoryControllerTest < ActionDispatch::IntegrationTest
  test "should get lookup" do
    get history_lookup_url
    assert_response :success
  end

end
