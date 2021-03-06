ActiveAdmin.register AdminUser do
  permit_params :email, :password, :password_confirmation
  actions :all, :except => [:destroy]
  index do
    selectable_column
    column :email
    column :current_sign_in_at
    column :sign_in_count
    column :created_at do |resource|
      resource.created_at.strftime("%B %d, %Y")
    end
    actions
  end

  filter :email

  form do |f|
    f.inputs "Admin Details" do
      f.input :email
      f.input :password
      f.input :password_confirmation
    end
    f.actions
  end

  show do
    attributes_table do
      row :email
      row :current_sign_in_at
      row :sign_in_count
      row :created_at   do |resource|
        resource.created_at.strftime("%B %d, %Y")
      end  
    end
  end

end
