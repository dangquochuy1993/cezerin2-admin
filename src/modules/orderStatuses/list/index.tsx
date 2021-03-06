import { connect } from "react-redux"
import { selectStatus, fetchStatusesIfNeeded } from "../actions"
import { fetchOrders } from "../../orders/actions"
import List from "../components/list"

const mapStateToProps = state => ({
  items: state.orderStatuses.items,
  selectedId: state.orderStatuses.selectedId,
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch(fetchStatusesIfNeeded())
  },
  onSelect: statusId => {
    dispatch(selectStatus(statusId))
    dispatch(fetchOrders())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
