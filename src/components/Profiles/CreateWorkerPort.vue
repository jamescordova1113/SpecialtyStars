<template>
  <div class="products">
      <div class="container">
          
        <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-8">
                    <h3>Your Portfolio</h3>
                    
                 <p>
                   Edit projects or add new projects to your portfolio.
                 </p>
              </div>
              
            </div>
          </div>

          <hr>

          <div class="product-test">


            <h3 class="d-inline-block">Project List</h3>
            <button @click="addNew" class="btn btn-primary float-right">Add Project</button>

            <div class="table-responsive">
              
                <table class="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      
                      <th>Modify</th>
                    </tr>
                  </thead>

                  <tbody>
                      <tr v-for="project in projects">
                        <td>
                          {{projects.name}}
                        </td>

                        <td>

                          <button class="btn btn-primary" @click="editProject(project)">Edit</button>
                          <button class="btn btn-danger" @click="deleteProject(project)">Delete</button>
                        </td>

                      </tr>


                  </tbody>
                </table>
            </div>

          </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="project" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel">Edit Project</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                <div class="row">
                  <!-- main project -->
                  <div class="col-md-8">
                    <div class="form-group">
                      <input type="text" placeholder="Project Name" v-model="projects.name" class="form-control">
                    </div>

                    <div class="form-group">
                      <vue-editor v-model="projects.description"></vue-editor>
                    </div>
                  </div>
                  <!-- product sidebar -->
                  <div class="col-md-4">
                    <h4 class="display-6">Project Details</h4>
                    <hr>

                    <!-- <div class="form-group">
                      <input type="text" placeholder="Product price" v-model="project.price" class="form-control">
                    </div> -->

                  

                    <div class="form-group">
                      <label for="project_image">Project Images</label>
                      <input type="file" @change="uploadImage" class="form-control">
                    </div>

                    <div class="form-group d-flex">
                      <div class="p-1" v-for="(image, index) in projects.images">
                          <div class="img-wrapp">
                              <img :src="image" alt="" width="80px">
                              <span class="delete-img" @click="deleteImage(image,index)">X</span>
                          </div>
                      </div>
                    </div>

                  </div>
                </div>




            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button @click="addProject()" type="button" class="btn btn-primary" v-if="modal == 'new'">Save changes</button>
              <button @click="updateProject()" type="button" class="btn btn-primary" v-if="modal == 'edit'">Apply changes</button>
            </div>
          </div>
        </div>
      </div>


    
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import db from "@/firebase/init";
import firebase from "firebase";

export default {
  name: "CreateWorkerPort",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },
  data(){
    return {
        projects: {
          user_id: '',
          project: [],
        },
        project: {
          name:null,
          description:null,
          price:null,
          tags:[],
          images:[]
        },
        activeItem:null,
        modal: null,
        tag: null
    }
  },
  firestore(){
      return {
        projects: db.collection('project'),
      }
  },
  methods:{
    deleteImage(img,index){
      let image = firebase.storage().refFromURL(img);
      this.project.images.splice(index,1);
      image.delete().then(function() {
        console.log('image deleted');
      }).catch(function(error) {
        // Uh-oh, an error occurred!
        console.log('an error occurred');
      });
    },
    addTag(){
       this.project.tags.push(this.tag);
       this.tag = "";
    },
    uploadImage(e){
      if(e.target.files[0]){
        
          let file = e.target.files[0];
    
          var storageRef = firebase.storage().ref('projects/'+ Math.random() + '_'  + file.name);
    
          let uploadTask  = storageRef.put(file);
    
          uploadTask.on('state_changed', (snapshot) => {
            
          }, (error) => {
            // Handle unsuccessful uploads
          }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.projects.images.push(downloadURL);
            });
          });
      }
    },
    reset(){
      this.project = {
          name:null,
          description:null,
          price:null,
          tags:[],
          images:[]
      }
    },
    addNew(){
        this.modal = 'new';
        this.reset();
        $('#project').modal('show');
    },
    updateProject(){
        this.$firestore.projects.doc(this.project.id).update(this.project);
          Toast.fire({
            type: 'success',
            title: 'Updated  successfully'
          })
           $('#project').modal('hide');
    },
    editProject(project){
      this.modal = 'edit';
      this.project = project;
      $('#projet').modal('show');
    },
    deleteProject(doc){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.$firestore.projects.doc(doc.id).delete()
          Toast.fire({
            type: 'success',
            title: 'Deleted  successfully'
          })
        
        }
      })
        
    },
    readData(){
      
     
    },
    addProject(){
      
      this.$firestore.projects.doc(this.users.id).add(this.project);
      
          Toast.fire({
            type: 'success',
            title: 'Project created successfully'
          })
      $('#project').modal('hide');
    }
  
  },
  created() {
    // console.log(firebase.auth().currentUser.uid);
    let ref = db
      .collection("projects")
      .where("user_id", "==", firebase.auth().currentUser.uid);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.projects = doc.data();
        this.projects.id = doc.id;
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-wrapp{
  position: relative;
}
.img-wrapp span.delete-img{
    position: absolute;
    top: -14px;
    left: -2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}
</style>