# This file is autogenerated. Do not edit it by hand. Regenerate it with:
#   srb rbi gems

# typed: strict
#
# If you would like to make changes to this file, great! Please create the gem's shim here:
#
#   https://github.com/sorbet/sorbet-typed/new/master?filename=lib/docker-remote/all/docker-remote.rbi
#
# docker-remote-0.6.0

module Docker
end
module Docker::Remote
  class ClientError < StandardError; end
  class ServerError < StandardError; end
  class UnauthorizedError < ClientError; end
  class NotFoundError < ClientError; end
  class UnknownRepoError < ClientError; end
  class UnsupportedAuthTypeError < StandardError; end
end