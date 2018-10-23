json.array! @new_messages.each do |message|
  json.id       message.id
  json.name     message.user.name
  json.time format_posted_time(message.created_at)
  json.content  message.content
  json.image    message.image.url
end
