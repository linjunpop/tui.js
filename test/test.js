var assert = chai.assert;
var expect = chai.expect

describe('TuiKit', function(){

  var tui = new Tui('515a3f00c9886d056f000001', '13f26c605e80f784d387da3c1a1e8b696a9d626f');

  describe('#getGroup(groupName)', function(){
    var client = tui.getGroup('group1')

    it('return `Success`', function(){
      assert.equal(client.status, 200)
    })

    describe('response', function(){
      var response = JSON.parse(client.response)

      it('Name', function() {
        expect(response).to.have.property('name').equal('group1')
      })
    })
  })

  describe('#createDevice(device)', function(){
    var client = tui.createDevice({
      "token": "12345678"
    })

    it('return `Created`', function(){
      assert.equal(client.status, 201)
    })

    describe('response', function(){
      var response = JSON.parse(client.response).device

      it('Token', function() {
        expect(response).to.have.property('token').equal('12345678')
      })
    })
  })

  describe('#updateDevice(deviceToken, device)', function(){
    var client = tui.updateDevice('12345678', {
      "groups": ["group1", "group3"]
    })

    it('return `Success`', function(){
      assert.equal(client.status, 200)
    })

    describe('response', function(){
      var response = JSON.parse(client.response).device

      it('Groups', function() {
        expect(response).to.have.property('groups')
          .to.have.members(["group1", "group3"])
      })
    })
  })

  describe('#deleteDevice(deviceToken)', function(){
    var client = tui.deleteDevice('12345678')

    it('return `No Content`', function(){
      assert.equal(client.status, 204)
    })
  })

  describe('#createMessage(message)', function(){
    var client = tui.createMessage({
      "alert": "Bazinga"
    })

    it('return `Created`', function(){
      assert.equal(client.status, 201)
    })
  })
})