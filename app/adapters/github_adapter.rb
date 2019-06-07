class GithubAdapter
  include HTTParty
  base_uri 'https://api.github.com'

  def initialize(user, password)
    @auth = { username: user, password: password }
  end

  def user_info
    self.class.get('/user/selenasmall', basic_auth: @auth)
  end
end