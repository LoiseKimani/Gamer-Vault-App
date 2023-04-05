# Controller logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
class FallbackController < ActionController

  def index
    # React app index page
    # render file: 'public/index.html'
    render file: Rails.public_path.join('index.html'), layout: false
  end
end
