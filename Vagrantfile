Vagrant.configure("2") do |config|

  require 'berkshelf/vagrant'

  config.vm.provider "virtualbox" do |v|
    v.memory = 1024
  end

  #install latest chef version using vagrant-omnibus
  config.omnibus.chef_version = :latest

  config.vm.define :machine do |machine|
    machine.vm.box = "precise64"
    #machine.vm.box_url = "http://files.vagrantup.com/precise64.box"
   
    machine.vm.network :private_network, ip: "192.168.60.30"
    #machine.vm.network :public_network
    
    machine.berkshelf.enabled = true

    machine.vm.synced_folder "~/code/quod-bnb/", "/srv/website"
 
    #machine.vm.provision :shell, :inline => "aptitude install ruby1.9.1-dev"
    
    #no longer need this as we are using vagrant omnibus
    #machine.vm.provision :shell, :inline => "gem install chef --version 11.8.2 --no-rdoc --no-ri --conservative"

    machine.vm.provision :chef_solo do |chef|

      chef.json = {
        "mysql" => {
            "server_root_password" => "the_password",
            "server_debian_password" => "the_password",
            "server_repl_password" => "the_password"
        }
      }

      chef.run_list = [
        "recipe[nginx-config]"
      ]

    end

  end
end