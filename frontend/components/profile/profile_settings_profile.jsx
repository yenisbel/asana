import React from 'react';
import { connect } from 'react-redux';
import { updateUser, requestUser } from '../../actions/user_action';
import { closeModal } from '../../actions/modal_actions';
import AvatarIcon from './avatar_icon';


class ProfileSettingsProfile extends React.Component {
    constructor(props) {
        super(props);
        const { currentUser } = this.props;
        this.state = {
            id: currentUser.id,
            full_name: currentUser.full_name,
            photo_url: currentUser.photo_url,
            changeAvatar: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { updateUser, closeModal } = this.props;
        updateUser(this.state);
        closeModal();
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    // componentDidMount(){
    //     const { id, requestUser} = this.props;
    //     this.props.requestUser(id);
    // }

    render() {
        const { full_name, photo_url, changeAvatar, currentUserId, requestUser } = this.state;

        const avatarImages = {
            kiwi: <i className="fas fa-user"></i>,
            cat: <i className="fas fa-cat"></i>,
            dog: <i className="fas fa-dog"></i>,
            frog: <i className="fas fa-frog"></i>,
            dove: <i className="fas fa-dove"></i>,
            dragon: <i className="fas fa-dragon"></i>,
            fish: <i className="fas fa-fish"></i>,
            hippo: <i className="fas fa-hippo"></i>,
        };

        const avatar = avatarImages.hasOwnProperty(photo_url) ? avatarImages[photo_url] : <i className="fas fa-user"></i>;
        const avatarRadioInputsClass = changeAvatar ? "" : " hidden";
       
        const avatarKeys = ["flushed", "grin", "frown", "smile"];

        const avatarRadioInputs = avatarKeys.map(key => {
            let input;
            if (key === photo_url) {
                input = <input type="radio" name="avatar" value={`${key}`} id={`${key}`} onChange={this.handleChange("photo_url")} checked />
            } else {
                input = <input type="radio" name="avatar" value={`${key}`} id={`${key}`} onChange={this.handleChange("photo_url")} />
            }

            return (
                <div key={`${key}`}>
                    {input}
                    <label htmlFor={`${key}`}><i className={`fas fa-${key}`}></i></label>
                </div>
            )
        });

        return (
            <div className="profile-settings-profile-container">
                <form onSubmit={this.handleSubmit}>

                    <div className="profile-settings-avatar">
                        <span className="profile-settings-avatar-label">Your avatar</span>
                        <div className="profile-settings-avatar-main">
                            <div className="profile-settings-avatar-main-img-frame" onClick={() => this.setState({ changeAvatar: true })}>
                                {/* <AvatarIcon photo_url={photo_url} /> */}
                                {avatar}

                            </div>
                            <div className="profile-settings-avatar-main-text">
                                <div className="profile-settings-avatar-main-text-top">
                                    <span onClick={() => this.setState({ changeAvatar: true })}>Change your avatar</span>
                                    <span className={`profile-settings-avatar-radio-inputs${avatarRadioInputsClass}`}>
                                        {avatarRadioInputs}
                                    </span>
                                </div>
                                <span className="profile-settings-avatar-main-text-bottom">Help your teammates recognize you!</span>
                            </div>
                        </div>
                    </div>

                    <div className="profile-settings-profile-full-name">
                        <label htmlFor="profileSettingsFullName" className="profile-settings-label">Full name</label>
                        <input type="text" value={full_name ? full_name : ""} id="profileSettingsFullName"
                            onChange={this.handleChange("full_name")} 
                            className="profile-settings-input" 
                            />
                    </div>
                    
                    <em>"Username can not be change here, you must provide a new account first"</em>
                    <input type="submit" value="Save Changes" />
                </form>
                
            </div>
        );
    }
}

const msp = (state, ownProps) => {
    const currentUserId = state.session.currentUserId;
    const currentUser = state.entities.users[currentUserId];
    return {
      currentUser,
      currentUserId
    };
};

const mdp = dispatch => {
   
    return {
        requestUser: (currentUserId) => dispatch(requestUser(currentUserId)),
        updateUser: (currentUser) => dispatch(updateUser(currentUser)),
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(msp, mdp)(ProfileSettingsProfile);