describe('TuiKit', function(){

  var tuiKit = new TuiKit('515a3f00c9886d056f000001', '13f26c605e80f784d387da3c1a1e8b696a9d626f');

  describe('#getGroup(groupName)', function(){
    it('get Group by name.', function(){
      tuiKit.getGroup('nammme')
    })
  })

  describe('#createDevice(device)', function(){
    it('create Device.', function(){
      tuiKit.createDevice({
        "token": "joke"
      })
    })
  })
})