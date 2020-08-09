import React from "react";
import ReactNextPaging from "react-next-paging";
import AuthService from './../../Services/auth.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

const buttonStyles = {
  height: '40px',
  width: '40px',
  borderRadius: '5px',
  padding: '8px',
  margin: '2px'
};

const Pagination = ({ itemsperpage, items}) => {
  return (
    <ReactNextPaging
      itemsperpage={itemsperpage}
      items={items}
    >
      {({
        getBackButtonProps,
        getFastBackButtonProps,
        getFwdButtonProps,
        getFastFwdButtonProps,
        getSelPageButtonProps,
        inipagearray,
        pagesforarray,
        currentpage,
        noitems,
        initialitem,
        lastitem,
        goBackBdisabled,
        goFastBackBdisabled,
        goFwdBdisabled,
        goFastFwdBdisabled
      }) => (
        <>
          {items.slice(initialitem, lastitem).map((item, index) => {
                return(
                    <div key={index} className="card">
                        <div className="post-title d-flex align-items-center">
                            <div className="profile-thumb">
                                <FontAwesomeIcon size='2x' icon={faCommentAlt} color='#CFB53B' style={{marginRight: '25px'}} />
                            </div>
    
                            <div className="posted-author">
                                <h6 className="author"><a href="">{item.user.first_name} {item.user.last_name}</a></h6>
                                <span className="post-time">{new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'short', day: 'numeric'}).format(new Date(item.created_at))}</span>
                            </div>
                        </div>
                        <div className="post-content">
                            <p className="post-desc">
                                {item.body}
                            </p>
                        </div>
                    </div>
                )
            
          })}
          {noitems > 0
            ? [
                <table key={noitems + 100} style={{margin:'auto'}}><tbody>
                  <tr>
                  <td colSpan={4} style={{ textAlign: "center" }}>
                    <button
                      style={buttonStyles}
                      {...getFastBackButtonProps()}
                      disabled={goFastBackBdisabled}
                    >
                      &lt;&lt;
                    </button>
                    <button
                      style={buttonStyles}
                      {...getBackButtonProps()}
                      disabled={goBackBdisabled}
                    >
                      &lt;
                    </button>
                    {Array.from(
                      { length: pagesforarray },
                      (v, i) => i + inipagearray
                    ).map(page => {
                      return (
                        <button
                          key={page}
                          style={buttonStyles}
                          {...getSelPageButtonProps({ page: page })}
                          disabled={currentpage == page}
                        >
                          {page}
                        </button>
                      );
                    })}
                    <button
                      style={buttonStyles}
                      {...getFwdButtonProps()}
                      disabled={goFwdBdisabled}
                    >
                      &gt;
                    </button>
                    <button
                      style={buttonStyles}
                      {...getFastFwdButtonProps()}
                      disabled={goFastFwdBdisabled}
                    >
                      &gt;&gt;
                    </button>
                  </td>
                </tr></tbody></table>
              ]
            : null}
        </>
      )}
    </ReactNextPaging>
  );
};

export default Pagination;